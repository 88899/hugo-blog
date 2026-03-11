"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function tocHighlighter() {
  return {
    headings: [],
    links: [],
    debouncedScroll: null,
    scrollHandler: null,
    // WeChat兼容：缓存DOM查询结果
    tocElement: null,
    windowHeight: 0,
    
    init: function init() {
      // 缓存TOC元素
      this.tocElement = document.querySelector('#TableOfContents');
      if (!this.tocElement || window.getComputedStyle(this.tocElement.parentElement).display === 'none') {
        return;
      }
      
      // 缓存窗口高度
      this.windowHeight = window.innerHeight;
      
      this.links = _toConsumableArray(this.tocElement.querySelectorAll('a'));
      this.headings = this.links.map(function (link) {
        var _link$getAttribute;
        return document.getElementById((_link$getAttribute = link.getAttribute('href')) === null || _link$getAttribute === void 0 ? void 0 : _link$getAttribute.replace('#', ''));
      }).filter(Boolean);
      
      // 创建防抖的滚动处理函数
      this.debouncedScroll = this.debounce(this.onScroll.bind(this), 300);
      
      // 创建绑定的滚动处理函数，便于清理
      this.scrollHandler = this.debouncedScroll;
      
      // 添加滚动监听器
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
      
      // WeChat兼容：添加窗口大小变化监听
      const resizeHandler = () => {
        this.windowHeight = window.innerHeight;
      };
      window.addEventListener('resize', resizeHandler, { passive: true });
      
      // 简化清理机制
      const cleanup = () => {
        this.destroy();
      };
      
      // 注册到全局清理系统
      if (window.registerCleanup) {
        window.registerCleanup(cleanup);
      }
      
      // 初始执行一次
      this.debouncedScroll();
    },
    destroy: function destroy() {
      // 清理滚动监听器
      if (this.scrollHandler) {
        window.removeEventListener('scroll', this.scrollHandler);
        this.scrollHandler = null;
      }
      // 清理防抖定时器
      if (this.debouncedScroll && this.debouncedScroll.cancel) {
        this.debouncedScroll.cancel();
      }
    },
    onScroll: function onScroll() {
      try {
        var closest = null;
        var minOffset = Infinity;
        
        this.headings.forEach(function (el, index) {
          if (!el) return; // 安全检查
          try {
            var rect = el.getBoundingClientRect();
            var offset = Math.abs(rect.top);
            if (rect.top < this.windowHeight && offset < minOffset) {
              minOffset = offset;
              closest = index;
            }
          } catch (e) {
            console.warn('TOC scroll calculation failed:', e);
          }
        }.bind(this));
        
        if (closest !== null && this.links[closest]) {
          this.setActive(this.links[closest]);
        }
      } catch (e) {
        console.warn('TOC scroll handler failed:', e);
      }
    },
    setActive: function setActive(activeLink) {
      this.links.forEach(function (link) {
        return link.classList.remove('menu-active');
      });
      activeLink.classList.add('menu-active');
    },
    debounce: function debounce(fn, delay) {
      var timeout;
      var debounced = function () {
        var _this = this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          return fn.apply(_this, args);
        }, delay);
      };
      
      // 添加取消方法
      debounced.cancel = function() {
        clearTimeout(timeout);
      };
      
      return debounced;
    }
  };
}