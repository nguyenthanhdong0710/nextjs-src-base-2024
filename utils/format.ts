import { ContentState, EditorState, Modifier, SelectionState, convertFromRaw, convertToRaw } from 'draft-js'

export const formatDate = (
  value: Date | string,
  formatting: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }
) => {
  if (!value) return value

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

export const formatCurrency = (value: number, currency?: { symbol?: string; code?: string }) => {
  if (Number.isNaN(value)) {
    return value
  }

  const amount = value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  if (currency) {
    return currency.symbol + ' ' + amount
  }

  return amount
}

export const appConvertEditorToRaw = (editorState: EditorState) => {
  return editorState.getCurrentContent().hasText()
    ? JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    : undefined
}

export const appConvertToEditorFromRaw = (raw?: string): EditorState => {
  return raw ? EditorState.createWithContent(convertFromRaw(JSON.parse(raw))) : EditorState.createEmpty()
}

export const replaceTextAndKeepStyle = ({
  editorState,
  searchText,
  replaceText
}: {
  editorState: EditorState
  searchText: string
  replaceText: string
}): EditorState => {
  const contentState = editorState.getCurrentContent()
  const blockMap = contentState.getBlockMap()
  const newBlockMap = blockMap.map(block => {
    if (!block) return block
    const text = block.getText()
    if (text.includes(searchText)) {
      const start = text.indexOf(searchText)
      const end = start + searchText.length

      // Create a selection for the text to replace
      const selection = SelectionState.createEmpty(block.getKey()).merge({
        anchorOffset: start,
        focusOffset: end
      })

      // Get current inline styles
      const currentInlineStyle = block.getInlineStyleAt(start)

      // Replace the text
      let contentStateWithText = Modifier.replaceText(contentState, selection, replaceText)

      // Create a new selection for the replaced text
      const newSelection = SelectionState.createEmpty(block.getKey()).merge({
        anchorOffset: start,
        focusOffset: start + replaceText.length
      })

      // Apply the original styles to the new text
      currentInlineStyle.forEach(style => {
        contentStateWithText = Modifier.applyInlineStyle(contentStateWithText, newSelection, style || '')
      })

      return contentStateWithText.getBlockForKey(block.getKey())
    }

    return block
  })

  const newContentState = contentState.merge({
    blockMap: newBlockMap
  }) as ContentState

  const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters')

  return newEditorState
}
