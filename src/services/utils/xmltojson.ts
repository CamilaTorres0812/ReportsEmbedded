import { XMLParser } from 'fast-xml-parser';

export class XmlToJsonTF {

    convertXmlToJson(inputXml: string) {
        const xml = inputXml;
        const parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: '',
        });
        const result = parser.parse(xml);
        console.log(result);
        return result;
    }

    replaceCharXml(inputXml: string) {
        let gt = /&gt;/gi;
        let lt = /&lt;/gi;
        let quot = /&quot;/gi;
        let resultado = inputXml.replace(gt, ">");
        resultado = resultado.replace(lt, "<");
        resultado = resultado.replace(quot, "'");
        return resultado;
    }
}