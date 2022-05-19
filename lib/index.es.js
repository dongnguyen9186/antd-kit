import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { Badge as Badge$1 } from 'antd';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".badge :global .ant-badge-count {\n  height: 17px;\n  line-height: 17px;\n}\n.badge :global .ant-badge-dot {\n  width: 10px;\n  height: 10px;\n}\n";
styleInject(css_248z);

var colors = {
    secondary: {
        bg: '#DEE8F7', text: '#172B4D'
    },
    primary: {
        bg: '#2D6EC8', text: '#FFFFFF'
    },
    danger: {
        bg: '#D44020', text: '#FFFFFF'
    }
};
var Badge = forwardRef(function (props, ref) {
    return (jsx(Badge$1, __assign({}, props, { style: {
            background: colors[(props === null || props === void 0 ? void 0 : props.type) || "primary"].bg,
            color: colors[(props === null || props === void 0 ? void 0 : props.type) || "primary"].text,
            fontWeight: 600,
        } }, { children: props.children })));
});
Badge.Ribbon = Badge$1.Ribbon;
Badge.defaultProps = {
    type: 'primary',
    children: null,
    color: undefined,
    dotSize: "medium",
    count: undefined,
    dot: false,
    offset: undefined,
    showZero: false,
    status: undefined,
    overflowCount: 99,
    className: "",
    style: undefined,
};

export { Badge };
//# sourceMappingURL=index.es.js.map
