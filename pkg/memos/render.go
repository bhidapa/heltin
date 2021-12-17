package memos

import (
	"bytes"
	"text/template"
)

func render(html []byte, data interface{}) (rendered []byte, err error) {
	tmplt := template.New("")

	tmplt, err = tmplt.Parse(string(definitions))
	if err != nil {
		return nil, err
	}

	tmplt, err = tmplt.Parse(string(html))
	if err != nil {
		return nil, err
	}

	buff := new(bytes.Buffer)
	err = tmplt.Execute(buff, data)
	if err != nil {
		return nil, err
	}

	return buff.Bytes(), nil
}
