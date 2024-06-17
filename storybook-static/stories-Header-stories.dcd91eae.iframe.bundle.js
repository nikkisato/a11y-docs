'use strict'
;(self.webpackChunk = self.webpackChunk || []).push([
  [512],
  {
    './src/stories/Header.stories.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          LoggedIn: () => LoggedIn,
          LoggedOut: () => LoggedOut,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        })
      var _LoggedIn_parameters,
        _LoggedIn_parameters_docs,
        _LoggedIn_parameters1,
        _LoggedOut_parameters,
        _LoggedOut_parameters_docs,
        _LoggedOut_parameters1,
        _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@storybook/test/dist/index.mjs',
        )
      const __WEBPACK_DEFAULT_EXPORT__ = {
          title: 'Example/Header',
          component: __webpack_require__('./src/stories/Header.tsx').Y,
          tags: ['autodocs'],
          parameters: { layout: 'fullscreen' },
          args: {
            onLogin: (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
            onLogout: (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
            onCreateAccount: (0,
            _storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
          },
        },
        LoggedIn = { args: { user: { name: 'Jane Doe' } } },
        LoggedOut = {}
      ;(LoggedIn.parameters = {
        ...LoggedIn.parameters,
        docs: {
          ...(null === (_LoggedIn_parameters = LoggedIn.parameters) ||
          void 0 === _LoggedIn_parameters
            ? void 0
            : _LoggedIn_parameters.docs),
          source: {
            originalSource:
              "{\n  args: {\n    user: {\n      name: 'Jane Doe'\n    }\n  }\n}",
            ...(null === (_LoggedIn_parameters1 = LoggedIn.parameters) ||
            void 0 === _LoggedIn_parameters1 ||
            null === (_LoggedIn_parameters_docs = _LoggedIn_parameters1.docs) ||
            void 0 === _LoggedIn_parameters_docs
              ? void 0
              : _LoggedIn_parameters_docs.source),
          },
        },
      }),
        (LoggedOut.parameters = {
          ...LoggedOut.parameters,
          docs: {
            ...(null === (_LoggedOut_parameters = LoggedOut.parameters) ||
            void 0 === _LoggedOut_parameters
              ? void 0
              : _LoggedOut_parameters.docs),
            source: {
              originalSource: '{}',
              ...(null === (_LoggedOut_parameters1 = LoggedOut.parameters) ||
              void 0 === _LoggedOut_parameters1 ||
              null ===
                (_LoggedOut_parameters_docs = _LoggedOut_parameters1.docs) ||
              void 0 === _LoggedOut_parameters_docs
                ? void 0
                : _LoggedOut_parameters_docs.source),
            },
          },
        })
      const __namedExportsOrder = ['LoggedIn', 'LoggedOut']
    },
  },
])
