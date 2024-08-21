function xmlToJson(xml: any) {
  let obj: any = {}
  if (xml.nodeType === 1) {
    // element node
    if (xml.attributes.length > 0) {
      obj['@attributes'] = {}
      for (let j = 0; j < xml.attributes.length; j++) {
        const attribute = xml.attributes.item(j)
        obj['@attributes'][attribute.nodeName] = attribute.nodeValue
      }
    }
  } else if (xml.nodeType === 3) {
    // text node
    obj = xml.nodeValue
  }

  if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i++) {
      const item = xml.childNodes.item(i)
      const nodeName = item.nodeName
      if (typeof obj[nodeName] === 'undefined') {
        obj[nodeName] = xmlToJson(item)
      } else {
        if (typeof obj[nodeName].push === 'undefined') {
          const old = obj[nodeName]
          obj[nodeName] = []
          obj[nodeName].push(old)
        }
        obj[nodeName].push(xmlToJson(item))
      }
    }
  }

  return obj
}

function parseXmlToJson(xmlStr: any) {
  const parser = new DOMParser()
  const xml = parser.parseFromString(xmlStr, 'text/xml')

  return xmlToJson(xml)
}

export default parseXmlToJson
