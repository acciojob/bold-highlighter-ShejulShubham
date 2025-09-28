const strongList = document.querySelectorAll("strong");

function highlight(element) {
    //Write your code here
	strongList.forEach((s)=>{
		s.style.color = "green";
	})	

}


function return_normal() {
    //Write your code here
	strongList.forEach((s)=>{
		s.style.color = "black";
	})	
    
}