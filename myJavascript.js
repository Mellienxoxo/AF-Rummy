	function getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
        }
        return "";
    }

	var ch = getQueryVariable("ch")
	var code = getQueryVariable("code")
	var fbclid = getQueryVariable("fbclid")
	var fbpid = getFbpCookie()

	if(!fbpid){
		fbpid = getQueryVariable("fbpid")
	}else{
		setFbpCookie(fbpid);
	}
	
function getFbpCookie() {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf('_fbp=') === 0) {
		console.log('Found _fbp cookie!');
      return cookie.substring('_fbp='.length);
    }
  }
  console.log('Did not find _fbp cookie.');
  return null;
}

function setFbpCookie(value) {
  document.cookie = '_fbp=' + value + '; SameSite=None; Secure';
}
	
    function copyTxt(_sTxt) {
        const aux = document.createElement('input')
        const content = _sTxt;
        aux.setAttribute('value', content)
        document.body.appendChild(aux)
        aux.select()
        document.execCommand('copy')
        document.body.removeChild(aux)
    }	

    document.addEventListener('DOMContentLoaded', function() {	
	  var url = "https://login.af4f85dsa46.com/fb";
		
      var lan = navigator.language || navigator.userLanguage;
      if (!lan) {
        lan = "";  
      }


      var os = navigator.platform;
      if (!os) {
        os = "";  
      }

	var osVer = ""; 

	try {

	const userAgent = navigator.userAgent.toLowerCase();

	if (userAgent.includes("windows")) {
		const windowsMatch = userAgent.match(/windows\snt\s([\d.]+)/);
		if (windowsMatch) {
		osVer = "Windows " + windowsMatch[1];  
		} else {
		osVer = "Windows Unknown version";
		}
	} else if (userAgent.includes("mac os")) {
		const macMatch = userAgent.match(/mac os x\s([\d_]+)/);
		if (macMatch) {
		osVer = "macOS " + macMatch[1].replace(/_/g, '.');  
		} else {
		osVer = "macOS Unknown version";
		}
	} else if (userAgent.includes("android")) {
		const androidMatch = userAgent.match(/android\s([\d.]+)/);
		if (androidMatch) {
		osVer = "Android " + androidMatch[1];  
		} else {
		osVer = "Android Unknown version";
		}
	} else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
		const iosMatch = userAgent.match(/os\s([\d_]+)/);
		if (iosMatch) {
		osVer = "iOS " + iosMatch[1].replace(/_/g, '.'); 
		} else {
		osVer = "iOS Unknown version";
		}
	} else {

		osVer = "Unknown System version";
  }
} catch (error) {
  console.error("Can't catch the System version:", error);
}
	  

      var UserAgent = navigator.userAgent;
      if (!UserAgent) {
        UserAgent = ""; 
      }
	  

	console.log("ch:" + ch);
	console.log("code:" + code);
	console.log("fbclid:" + fbclid);
	console.log("fbpid:" + fbpid);
      console.log("lan:" + lan);
      console.log("os:" + os);
      console.log("osVer:" + osVer);
	  console.log("UserAgent:" + UserAgent);

	  
	  var postData = {
        ch: ch,
        code: code,
        fbclid: fbclid,
        fbpid: fbpid,
        lan: lan,
        os: os,
        osVer: osVer,
        UserAgent: UserAgent
      };  

      fetch(url, {
        method: "POST",
        headers: {
           "Content-Type": "text/plain"
		},
        body: JSON.stringify(postData)
      })
      .then(response => response.json())
      .then(data => {

        // console.log(data.key);
		
	var textToCopy = data.key;

	navigator.clipboard.writeText(textToCopy)
	.then(() => {
		console.log("clipboard success");
	})
	.catch((error) => {
		console.error("clipboard fail:", error);
	});
	
      })
      .catch(error => {

        console.error('Error:', error);
      });


      
	  
    });  
	
    