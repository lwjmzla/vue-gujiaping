let MyPlugin = function (options) { // !骨架
  this.test = options.test
}

const imgUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPg0KICA8ZGVmcz4NCiAgICA8cGF0aCBpZD0iYiIgZD0iTTAgMGgxMDgwdjI2MEgweiIvPg0KICAgIDxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+DQogICAgICA8ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+DQogICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIg0KICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz4NCiAgICA8L2ZpbHRlcj4NCiAgPC9kZWZzPg0KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMSkiPg0KICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPg0KICAgIDx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2IiLz4NCiAgICA8cGF0aCBmaWxsPSIjRjZGNkY2IiBkPSJNMjMwIDQ0aDUzM3Y0NkgyMzB6Ii8+DQogICAgPHJlY3Qgd2lkdGg9IjE3MiIgaGVpZ2h0PSIxNzIiIHg9IjMwIiB5PSI0NCIgZmlsbD0iI0Y2RjZGNiIgcng9IjQiLz4NCiAgICA8cGF0aCBmaWxsPSIjRjZGNkY2Ig0KICAgICAgICAgIGQ9Ik0yMzAgMTE4aDM2OXYzMEgyMzB6TTIzMCAxODJoMzIzdjMwSDIzMHpNODEyIDExNWgyMzh2MzlIODEyek04MDggMTg0aDI0MnYzMEg4MDh6TTkxNyA0OGgxMzN2MzdIOTE3eiIvPg0KICA8L2c+DQo8L3N2Zz4='

MyPlugin.prototype.apply = function (complier) {
  // console.log(complier) // 基本webpack配置都找到
  complier.plugin('compilation', compilation => {
    // console.log(compilation) // 感觉跟complier 差不多
    compilation.plugin('html-webpack-plugin-before-html-processing', (htmlData, callback) => {
      htmlData.html = htmlData.html.replace(`<div id="app"></div>`, `<div id="app">
        <div style="display:none;" id="gujia-A">
          <img src="${imgUrl}" >
          <img src="${imgUrl}" >
          <img src="${imgUrl}" >
          <img src="${imgUrl}" >
          <img src="${imgUrl}" >
        </div>
        <div style="background-color: yellow;height: 500px;display:none;" id="gujia-B">骨架屏B</div>
      </div>
      <script>
        var hashPath = location.hash // #/ || #/list
        var historyPath = location.pathname // / || /list
        var mode = location.href.indexOf('#') > 0 ? 'hash' : 'history'
        if (mode === 'hash') {
          if (hashPath === '#/') {
            document.getElementById('gujia-A').style.display = 'block'
          } else if (hashPath === '#/list') {
            document.getElementById('gujia-B').style.display = 'block'
          }
        } else if (mode === 'history') {
          if (historyPath === '/') {
            document.getElementById('gujia-A').style.display = 'block'
          } else if (historyPath === '/list') {
            document.getElementById('gujia-B').style.display = 'block'
          }
        }
      </script>
      `)
      callback(null, htmlData)
    })
  })
}

module.exports = MyPlugin
