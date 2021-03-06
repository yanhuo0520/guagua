//输出对象转formData
function makeFormData(obj, form_data)
{
    var data = [];
    if (obj instanceof File)
    {
        data.push({key: "", value: obj});
    }
    else if (obj instanceof Array )
    {
        for (var j=0,len=obj.length;j<len;j++)
        {
            var arr = makeFormData(obj[j]);
            for (var k=0,l=arr.length;k<l;k++)
            {
                var key = !!form_data ? j+arr[k].key : "["+j+"]"+arr[k].key;
                data.push({key: key, value: arr[k].value})
            }
        }
    }
    else if (typeof obj == 'object')
    {
        for (var j in obj)
        {
            var arr = makeFormData(obj[j]);
            for (var k=0,l=arr.length;k<l;k++)
            {
                var key = !!form_data ? j+arr[k].key : "["+j+"]"+arr[k].key;
                data.push({key: key, value: arr[k].value})
            }
        }
    }
    else
    {
        data.push({key: "", value: obj});
    }
    if (!!form_data)
    {
        // 封装
        for (var i=0,len=data.length;i<len;i++)
        {
            form_data.append(data[i].key, data[i].value)
        }
    }
    else
    {
        return data;
    }
}

function getQueryString(name) {
        var href=window.location.href
        if(href.indexOf('?') == -1 || href.indexOf(name) == -1 || href.indexOf('=') == -1){
            return '';
        }
        let val=''
        let param_str=href.substr(href.indexOf('?')+1);
        let param_arr=[];
        if(param_str.indexOf('&') !=-1){
            param_arr=param_str.split('&');
        }else{
            param_arr[0]=param_str
        }


        for(let  p of param_arr){
                let p_arr=p.split('=');
                if(p_arr[0] == name){
                    val=p_arr[1]
                }
        }

        return val;
    }
	
	function getUrlParam(name) { //a标签跳转获取参数
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return (r[2]);
		return null;
	}
    /**
    * 日期格式转换
    * @param fmt 要处理成的日期格式 例: 'yyyy-MM-dd hh:mm:ss'
    * @param date 要处理的日期，需Date类型
    */
    function dateFormat(fmt, date) {
        date = date ? date : new Date();
        let o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, //小时
            "H+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        let week = {
            "0": "/u65e5",
            "1": "/u4e00",
            "2": "/u4e8c",
            "3": "/u4e09",
            "4": "/u56db",
            "5": "/u4e94",
            "6": "/u516d"
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        if (/(E+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[date.getDay() + ""]);
        }
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
    function checkPhone() {
        var _this = this
        var agent = (navigator.userAgent || navigator.vendor || window.opera)
        if (agent != null) {
            var agentName = agent.toLowerCase()
            if (/android/i.test(agentName)) {
                return 'android'
            } else if (/iphone/i.test(agentName)) {
                return 'ios'
            }
        }
    }
    function baseUrl(param) {
        // return 'http://172.168.0.50' + param;
        // return 'http://www.guagua.com' + param;

        return 'http://sy.xfd365.com' + param;
    }
	function getJssdk() {
		let that = this;
		axios({
			method: 'post',
			url: 'http://sy.xfd365.com/wx/jssdk/getSignPackage',
			//data: form_data
			data: {
				token: localStorage.getItem('token'),
				url: window.location.href
			}
		}).then(function(resp) {
			let data = resp.data
		
			let sdkData = resp.data
			wx.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: sdkData.appId, // 必填，公众号的唯一标识
				timestamp: sdkData.timestamp, // 必填，生成签名的时间戳
				nonceStr: sdkData.nonceStr, // 必填，生成签名的随机串
				signature: sdkData.signature, // 必填，签名
				jsApiList: [
					'updateAppMessageShareData',
					'updateTimelineShareData',
				] // 必填，需要使用的JS接口列表
			});
			setWx(); 
		})
	}

