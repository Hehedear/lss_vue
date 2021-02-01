
function sj(){
var time=new Date().getHours(); 
const root = document.documentElement;
if(time>=6 && time <16){
	console.log("早上好");
           root.style.setProperty('--sj','url(https://www.hualigs.cn/image/600fea6887048.jpg) center center/cover no-repeat');
}
        else if(time>=16 && time <=19){
console.log("下午好");
            root.style.setProperty('--sj','url(https://www.hualigs.cn/image/600fea68123d5.jpg) center center/cover no-repeat');
        }else if(time>=19 && time <24){
console.log("晚上好");
            root.style.setProperty('--sj','url(https://www.hualigs.cn/image/600fea67e36a5.jpg) center center/cover no-repeat');
        }
	else if(time>=0 && time <6){
console.log("晚安");
             root.style.setProperty('--sj','url(https://www.hualigs.cn/image/600fea67e36a5.jpg) center center/cover no-repeat');
        }

}
           
sj();