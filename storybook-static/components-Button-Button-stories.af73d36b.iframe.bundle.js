/*! For license information please see components-Button-Button-stories.af73d36b.iframe.bundle.js.LICENSE.txt */
;(self.webpackChunk = self.webpackChunk || []).push([
  [721],
  {
    './src/components/Button/Button.stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Disabled: () => Disabled,
          Primary: () => Primary,
          Secondary: () => Secondary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Button_stories,
        })
      __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js',
        ),
        classnames = __webpack_require__('./node_modules/classnames/index.js'),
        classnames_default = __webpack_require__.n(classnames),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleDomAPI.js',
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertBySelector.js',
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          './node_modules/style-loader/dist/runtime/insertStyleElement.js',
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          './node_modules/style-loader/dist/runtime/styleTagTransform.js',
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Button_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.css',
        ),
        options = {}
      ;(options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, 'head')),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default())
      injectStylesIntoStyleTag_default()(Button_module.A, options)
      const Button_Button_module =
        Button_module.A && Button_module.A.locals
          ? Button_module.A.locals
          : void 0
      function Button(param) {
        let { text = '', type, className, style } = param
        const buttonClass = classnames_default()(
          Button_Button_module.button,
          className,
          [Button_Button_module[style]],
        )
        return (0, jsx_runtime.jsx)('button', {
          className: buttonClass,
          type,
          children: text,
        })
      }
      var _Default_parameters,
        _Default_parameters_docs,
        _Default_parameters1,
        _Primary_parameters,
        _Primary_parameters_docs,
        _Primary_parameters1,
        _Secondary_parameters,
        _Secondary_parameters_docs,
        _Secondary_parameters1,
        _Disabled_parameters,
        _Disabled_parameters_docs,
        _Disabled_parameters1
      Button.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Button',
        props: {
          text: {
            required: !1,
            tsType: { name: 'string' },
            description: '',
            defaultValue: { value: "''", computed: !1 },
          },
          type: {
            required: !0,
            tsType: {
              name: 'union',
              raw: "'button' | 'submit'",
              elements: [
                { name: 'literal', value: "'button'" },
                { name: 'literal', value: "'submit'" },
              ],
            },
            description: '',
          },
          className: {
            required: !1,
            tsType: { name: 'string' },
            description: '',
          },
          style: {
            required: !1,
            tsType: {
              name: 'union',
              raw: "'default' | 'primary' | 'secondary' | 'disabled'",
              elements: [
                { name: 'literal', value: "'default'" },
                { name: 'literal', value: "'primary'" },
                { name: 'literal', value: "'secondary'" },
                { name: 'literal', value: "'disabled'" },
              ],
            },
            description: '',
          },
        },
      }
      const Button_stories = {
          title: 'Components/Button',
          component: Button,
          parameters: { layout: 'centered' },
          tags: ['autodocs'],
        },
        Default = {
          args: { text: 'Default', style: 'default', type: 'button' },
        },
        Primary = {
          args: { style: 'primary', text: 'Primary', type: 'button' },
        },
        Secondary = {
          args: { style: 'secondary', text: 'Secondary', type: 'button' },
        },
        Disabled = {
          args: { style: 'disabled', text: 'Disabled', type: 'button' },
        }
      ;(Default.parameters = {
        ...Default.parameters,
        docs: {
          ...(null === (_Default_parameters = Default.parameters) ||
          void 0 === _Default_parameters
            ? void 0
            : _Default_parameters.docs),
          source: {
            originalSource:
              "{\n  args: {\n    // onClick: () => alert('You clicked me!'),\n    text: 'Default',\n    style: 'default',\n    type: 'button'\n  }\n}",
            ...(null === (_Default_parameters1 = Default.parameters) ||
            void 0 === _Default_parameters1 ||
            null === (_Default_parameters_docs = _Default_parameters1.docs) ||
            void 0 === _Default_parameters_docs
              ? void 0
              : _Default_parameters_docs.source),
          },
        },
      }),
        (Primary.parameters = {
          ...Primary.parameters,
          docs: {
            ...(null === (_Primary_parameters = Primary.parameters) ||
            void 0 === _Primary_parameters
              ? void 0
              : _Primary_parameters.docs),
            source: {
              originalSource:
                "{\n  args: {\n    style: 'primary',\n    // onClick: () => alert('You clicked me!'),\n    text: 'Primary',\n    type: 'button'\n  }\n}",
              ...(null === (_Primary_parameters1 = Primary.parameters) ||
              void 0 === _Primary_parameters1 ||
              null === (_Primary_parameters_docs = _Primary_parameters1.docs) ||
              void 0 === _Primary_parameters_docs
                ? void 0
                : _Primary_parameters_docs.source),
            },
          },
        }),
        (Secondary.parameters = {
          ...Secondary.parameters,
          docs: {
            ...(null === (_Secondary_parameters = Secondary.parameters) ||
            void 0 === _Secondary_parameters
              ? void 0
              : _Secondary_parameters.docs),
            source: {
              originalSource:
                "{\n  args: {\n    style: 'secondary',\n    text: 'Secondary',\n    type: 'button'\n  }\n}",
              ...(null === (_Secondary_parameters1 = Secondary.parameters) ||
              void 0 === _Secondary_parameters1 ||
              null ===
                (_Secondary_parameters_docs = _Secondary_parameters1.docs) ||
              void 0 === _Secondary_parameters_docs
                ? void 0
                : _Secondary_parameters_docs.source),
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...(null === (_Disabled_parameters = Disabled.parameters) ||
            void 0 === _Disabled_parameters
              ? void 0
              : _Disabled_parameters.docs),
            source: {
              originalSource:
                "{\n  args: {\n    style: 'disabled',\n    text: 'Disabled',\n    type: 'button'\n  }\n}",
              ...(null === (_Disabled_parameters1 = Disabled.parameters) ||
              void 0 === _Disabled_parameters1 ||
              null ===
                (_Disabled_parameters_docs = _Disabled_parameters1.docs) ||
              void 0 === _Disabled_parameters_docs
                ? void 0
                : _Disabled_parameters_docs.source),
            },
          },
        })
      const __namedExportsOrder = [
        'Default',
        'Primary',
        'Secondary',
        'Disabled',
      ]
    },
    './node_modules/classnames/index.js': (module, exports) => {
      var __WEBPACK_AMD_DEFINE_RESULT__
      !(function () {
        'use strict'
        var hasOwn = {}.hasOwnProperty
        function classNames() {
          for (var classes = [], i = 0; i < arguments.length; i++) {
            var arg = arguments[i]
            if (arg) {
              var argType = typeof arg
              if ('string' === argType || 'number' === argType)
                classes.push(arg)
              else if (Array.isArray(arg)) {
                if (arg.length) {
                  var inner = classNames.apply(null, arg)
                  inner && classes.push(inner)
                }
              } else if ('object' === argType) {
                if (
                  arg.toString !== Object.prototype.toString &&
                  !arg.toString.toString().includes('[native code]')
                ) {
                  classes.push(arg.toString())
                  continue
                }
                for (var key in arg)
                  hasOwn.call(arg, key) && arg[key] && classes.push(key)
              }
            }
          }
          return classes.join(' ')
        }
        module.exports
          ? ((classNames.default = classNames), (module.exports = classNames))
          : void 0 ===
              (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return classNames
              }.apply(exports, [])) ||
            (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
      })()
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/sourceMaps.js',
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/api.js',
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          )
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '/* Default Button */\n.Button_button__exqP_ {\n  display: inline-block;\n  padding: 10px 20px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 5px;\n  border: 2px solid #ccc;\n  color: #333;\n  background-color: #fff;\n  cursor: pointer;\n}\n\n/* Primary Button */\n.Button_primary__DEC_1 {\n  border-color: #007bff;\n  color: #fff;\n  background-color: #007bff;\n}\n\n/* Secondary Button */\n.Button_secondary__9ex2D {\n  border-color: #6c757d;\n  color: #fff;\n  background-color: #6c757d;\n}\n\n/* Disabled Button */\n.Button_button__exqP_.Button_disabled__8r9g4,\n.Button_button__exqP_:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n',
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Button/Button.module.css'],
            names: [],
            mappings:
              'AAAA,mBAAmB;AACnB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,sBAAsB;EACtB,eAAe;AACjB;;AAEA,mBAAmB;AACnB;EACE,qBAAqB;EACrB,WAAW;EACX,yBAAyB;AAC3B;;AAEA,qBAAqB;AACrB;EACE,qBAAqB;EACrB,WAAW;EACX,yBAAyB;AAC3B;;AAEA,oBAAoB;AACpB;;EAEE,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;AACrB',
            sourcesContent: [
              '/* Default Button */\n.button {\n  display: inline-block;\n  padding: 10px 20px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 5px;\n  border: 2px solid #ccc;\n  color: #333;\n  background-color: #fff;\n  cursor: pointer;\n}\n\n/* Primary Button */\n.primary {\n  border-color: #007bff;\n  color: #fff;\n  background-color: #007bff;\n}\n\n/* Secondary Button */\n.secondary {\n  border-color: #6c757d;\n  color: #fff;\n  background-color: #6c757d;\n}\n\n/* Disabled Button */\n.button.disabled,\n.button:disabled {\n  pointer-events: none;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            button: 'Button_button__exqP_',
            primary: 'Button_primary__DEC_1',
            secondary: 'Button_secondary__9ex2D',
            disabled: 'Button_disabled__8r9g4',
          })
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
      },
    './node_modules/css-loader/dist/runtime/api.js': (module) => {
      'use strict'
      module.exports = function (cssWithMappingToString) {
        var list = []
        return (
          (list.toString = function toString() {
            return this.map(function (item) {
              var content = '',
                needLayer = void 0 !== item[5]
              return (
                item[4] && (content += '@supports ('.concat(item[4], ') {')),
                item[2] && (content += '@media '.concat(item[2], ' {')),
                needLayer &&
                  (content += '@layer'.concat(
                    item[5].length > 0 ? ' '.concat(item[5]) : '',
                    ' {',
                  )),
                (content += cssWithMappingToString(item)),
                needLayer && (content += '}'),
                item[2] && (content += '}'),
                item[4] && (content += '}'),
                content
              )
            }).join('')
          }),
          (list.i = function i(modules, media, dedupe, supports, layer) {
            'string' == typeof modules && (modules = [[null, modules, void 0]])
            var alreadyImportedModules = {}
            if (dedupe)
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0]
                null != id && (alreadyImportedModules[id] = !0)
              }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k])
              ;(dedupe && alreadyImportedModules[item[0]]) ||
                (void 0 !== layer &&
                  (void 0 === item[5] ||
                    (item[1] = '@layer'
                      .concat(
                        item[5].length > 0 ? ' '.concat(item[5]) : '',
                        ' {',
                      )
                      .concat(item[1], '}')),
                  (item[5] = layer)),
                media &&
                  (item[2]
                    ? ((item[1] = '@media '
                        .concat(item[2], ' {')
                        .concat(item[1], '}')),
                      (item[2] = media))
                    : (item[2] = media)),
                supports &&
                  (item[4]
                    ? ((item[1] = '@supports ('
                        .concat(item[4], ') {')
                        .concat(item[1], '}')),
                      (item[4] = supports))
                    : (item[4] = ''.concat(supports))),
                list.push(item))
            }
          }),
          list
        )
      }
    },
    './node_modules/css-loader/dist/runtime/sourceMaps.js': (module) => {
      'use strict'
      module.exports = function (item) {
        var content = item[1],
          cssMapping = item[3]
        if (!cssMapping) return content
        if ('function' == typeof btoa) {
          var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping))),
            ),
            data =
              'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                base64,
              ),
            sourceMapping = '/*# '.concat(data, ' */')
          return [content].concat([sourceMapping]).join('\n')
        }
        return [content].join('\n')
      }
    },
    './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js': (
      module,
    ) => {
      'use strict'
      var stylesInDOM = []
      function getIndexByIdentifier(identifier) {
        for (var result = -1, i = 0; i < stylesInDOM.length; i++)
          if (stylesInDOM[i].identifier === identifier) {
            result = i
            break
          }
        return result
      }
      function modulesToDom(list, options) {
        for (
          var idCountMap = {}, identifiers = [], i = 0;
          i < list.length;
          i++
        ) {
          var item = list[i],
            id = options.base ? item[0] + options.base : item[0],
            count = idCountMap[id] || 0,
            identifier = ''.concat(id, ' ').concat(count)
          idCountMap[id] = count + 1
          var indexByIdentifier = getIndexByIdentifier(identifier),
            obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            }
          if (-1 !== indexByIdentifier)
            stylesInDOM[indexByIdentifier].references++,
              stylesInDOM[indexByIdentifier].updater(obj)
          else {
            var updater = addElementStyle(obj, options)
            ;(options.byIndex = i),
              stylesInDOM.splice(i, 0, { identifier, updater, references: 1 })
          }
          identifiers.push(identifier)
        }
        return identifiers
      }
      function addElementStyle(obj, options) {
        var api = options.domAPI(options)
        api.update(obj)
        return function updater(newObj) {
          if (newObj) {
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap &&
              newObj.supports === obj.supports &&
              newObj.layer === obj.layer
            )
              return
            api.update((obj = newObj))
          } else api.remove()
        }
      }
      module.exports = function (list, options) {
        var lastIdentifiers = modulesToDom(
          (list = list || []),
          (options = options || {}),
        )
        return function update(newList) {
          newList = newList || []
          for (var i = 0; i < lastIdentifiers.length; i++) {
            var index = getIndexByIdentifier(lastIdentifiers[i])
            stylesInDOM[index].references--
          }
          for (
            var newLastIdentifiers = modulesToDom(newList, options), _i = 0;
            _i < lastIdentifiers.length;
            _i++
          ) {
            var _index = getIndexByIdentifier(lastIdentifiers[_i])
            0 === stylesInDOM[_index].references &&
              (stylesInDOM[_index].updater(), stylesInDOM.splice(_index, 1))
          }
          lastIdentifiers = newLastIdentifiers
        }
      }
    },
    './node_modules/style-loader/dist/runtime/insertBySelector.js': (
      module,
    ) => {
      'use strict'
      var memo = {}
      module.exports = function insertBySelector(insert, style) {
        var target = (function getTarget(target) {
          if (void 0 === memo[target]) {
            var styleTarget = document.querySelector(target)
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            )
              try {
                styleTarget = styleTarget.contentDocument.head
              } catch (e) {
                styleTarget = null
              }
            memo[target] = styleTarget
          }
          return memo[target]
        })(insert)
        if (!target)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          )
        target.appendChild(style)
      }
    },
    './node_modules/style-loader/dist/runtime/insertStyleElement.js': (
      module,
    ) => {
      'use strict'
      module.exports = function insertStyleElement(options) {
        var element = document.createElement('style')
        return (
          options.setAttributes(element, options.attributes),
          options.insert(element, options.options),
          element
        )
      }
    },
    './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict'
        module.exports = function setAttributesWithoutAttributes(styleElement) {
          var nonce = __webpack_require__.nc
          nonce && styleElement.setAttribute('nonce', nonce)
        }
      },
    './node_modules/style-loader/dist/runtime/styleDomAPI.js': (module) => {
      'use strict'
      module.exports = function domAPI(options) {
        if ('undefined' == typeof document)
          return { update: function update() {}, remove: function remove() {} }
        var styleElement = options.insertStyleElement(options)
        return {
          update: function update(obj) {
            !(function apply(styleElement, options, obj) {
              var css = ''
              obj.supports &&
                (css += '@supports ('.concat(obj.supports, ') {')),
                obj.media && (css += '@media '.concat(obj.media, ' {'))
              var needLayer = void 0 !== obj.layer
              needLayer &&
                (css += '@layer'.concat(
                  obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
                  ' {',
                )),
                (css += obj.css),
                needLayer && (css += '}'),
                obj.media && (css += '}'),
                obj.supports && (css += '}')
              var sourceMap = obj.sourceMap
              sourceMap &&
                'undefined' != typeof btoa &&
                (css +=
                  '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(
                      unescape(encodeURIComponent(JSON.stringify(sourceMap))),
                    ),
                    ' */',
                  )),
                options.styleTagTransform(css, styleElement, options.options)
            })(styleElement, options, obj)
          },
          remove: function remove() {
            !(function removeStyleElement(styleElement) {
              if (null === styleElement.parentNode) return !1
              styleElement.parentNode.removeChild(styleElement)
            })(styleElement)
          },
        }
      }
    },
    './node_modules/style-loader/dist/runtime/styleTagTransform.js': (
      module,
    ) => {
      'use strict'
      module.exports = function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = css
        else {
          for (; styleElement.firstChild; )
            styleElement.removeChild(styleElement.firstChild)
          styleElement.appendChild(document.createTextNode(css))
        }
      }
    },
  },
])
