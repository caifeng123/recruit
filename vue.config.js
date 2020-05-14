const path = require('path')
module.exports={
	configureWebpack:{
		resolve:{
			alias:{
				'@':path.resolve('./src'),
				'assets':path.resolve('./src/assets'),
				'common':path.resolve('./src/common'),
				'components':path.resolve('./src/components'),
				'network':path.resolve('./src/network'),
				'views':path.resolve('./src/views')
			}
		}
	},
	// 线上环境地址
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	// 本地调试代理跨域
	devServer: {
	  proxy: {
	    '/api': {
	      target: 'http://evp.51job.com/51job/api/1.0/index.php/yun/index/',
	      changeOrigin: true,
	      ws: true,
	      pathRewrite: {
	        '^/api': ''
	      }
	    }
	  }
	},
	css: {
	  loaderOptions: {
	    postcss: {
	      plugins: [
	        require("postcss-px-to-viewport")({
	          unitToConvert: "px",    // 需要转换的单位
	          viewportWidth: 750,     // 设计稿宽度
	          unitPrecision: 3,       // 转换小数点精度
	          propList: [             // 需转换的属性， *为全部转换
	            "*"
	          ],
	          viewportUnit: "vw",     // 转换后的单位
	          fontViewportUnit: "vw", // 同上
	          selectorBlackList: [],  // 转换黑名单，用于屏蔽一些 css rule中不需要转换的 class(id,tag等)
	          minPixelValue: 1,       // 最小不转换单位，比如1px
	          mediaQuery: false,      // 是否转换@media中的内容
	          replace: true,          
	          exclude: /(\/|\\)(node_modules)(\/|\\)/,  // 排除目录
	        })
	      ]
	    }
	  }
	}
}