function panel(){
$("#panel").slideDown("fast");
$("#panel1").slideUp("fast");
$("#panel2").slideUp("fast");
$("#panel3").slideUp("fast");
}

function panel1(){
$("#panel1").slideDown("fast");
$("#panel").slideUp("fast");
$("#panel2").slideUp("fast");
$("#panel3").slideUp("fast");
}

function panel2(){
$("#panel2").slideDown("fast");
$("#panel1").slideUp("fast");
$("#panel").slideUp("fast");
$("#panel3").slideUp("fast");
}

function panel3(){
$("#panel3").slideDown("fast");
$("#panel1").slideUp("fast");
$("#panel2").slideUp("fast");
$("#panel").slideUp("fast");
}


function info_what_all(){
	var x;
	x=document.getElementById("what_all").checked;
	if(x==true){
	document.getElementById("what_app").checked=false;
	document.getElementById("what_app").disabled=true;
	info_what_app();	
	document.getElementById("what_house").checked=false;
	document.getElementById("what_house").disabled=true;
	info_what_house();
	document.getElementById("what_hotel").checked=false;
	document.getElementById("what_hotel").disabled=true;
	info_what_hotel();
	document.getElementById("what_land").checked=false;
	document.getElementById("what_land").disabled=true;
	info_what_land();
	document.getElementById("what_invest").checked=false;
	document.getElementById("what_invest").disabled=true;
	info_what_invest();
	document.getElementById("what_com").checked=false;
	document.getElementById("what_com").disabled=true;
	info_what_commers();
	$("#i_what").append("<p id='all_what' style='color:rgb(255,0,0);text-align:center'><i>All</i></p>");
	}else{
	$("#all_what").remove();
	document.getElementById("what_app").disabled=false;
	document.getElementById("what_house").disabled=false;
	document.getElementById("what_hotel").disabled=false;
	document.getElementById("what_land").disabled=false;
	document.getElementById("what_invest").disabled=false;
	document.getElementById("what_com").disabled=false;
	}
}

function info_where_all(){
	var x;
	x=document.getElementById("where_all").checked;
	if(x==true){
	document.getElementById("where_bs").checked=false;
	document.getElementById("where_bs").disabled=true;
	info_where_bs();	
	document.getElementById("where_pom").checked=false;
	document.getElementById("where_pom").disabled=true;
	info_where_pom();
	document.getElementById("where_sb").checked=false;
	document.getElementById("where_sb").disabled=true;
	info_where_sb();
	document.getElementById("where_sv").checked=false;
	document.getElementById("where_sv").disabled=true;
	info_where_sv();
	document.getElementById("where_s").checked=false;
	document.getElementById("where_s").disabled=true;
	info_where_s();
	document.getElementById("where_ts").checked=false;
	document.getElementById("where_ts").disabled=true;
	info_where_ts();
	document.getElementById("where_re").checked=false;
	document.getElementById("where_re").disabled=true;
	info_where_re();
	$("#i_where").append("<p id='all_where' style='color:rgb(255,0,0);text-align:center'><i>All</i></p>");
	}else{
	$("#all_where").remove();
	document.getElementById("where_bs").disabled=false;
	document.getElementById("where_pom").disabled=false;
	document.getElementById("where_sb").disabled=false;
	document.getElementById("where_sv").disabled=false;
	document.getElementById("where_s").disabled=false;
	document.getElementById("where_ts").disabled=false;
	document.getElementById("where_re").disabled=false;
	}
}

function info_what_app(){
	var x;
	x=document.getElementById("what_app").checked;
	if(x==true){
	$("#i_what").append("<p id='app_what' style='color:rgb(255,0,0);text-align:center'><i>Appartment</i></p>");
	}else if(x==false){
	$("#app_what").remove();
	}
}

function info_what_house(){
	var x;
	x=document.getElementById("what_house").checked;
	if(x==true){
	$("#i_what").append("<p id='house_what' style='color:rgb(255,0,0);text-align:center'><i>House</i></p>");
	}else $("#house_what").remove();
}

function info_what_hotel(){
	var x;
	x=document.getElementById("what_hotel").checked;
	if(x==true){
	$("#i_what").append("<p id='hotel_what' style='color:rgb(255,0,0);text-align:center'><i>Hotel</i></p>");
	}else $("#hotel_what").remove();
}

function info_what_land(){
	var x;
	x=document.getElementById("what_land").checked;
	if(x==true){
	$("#i_what").append("<p id='land_what' style='color:rgb(255,0,0);text-align:center'><i>Land</i></p>");
	}else $("#land_what").remove();
}

function info_what_invest(){
	var x;
	x=document.getElementById("what_invest").checked;
	if(x==true){
	$("#i_what").append("<p id='invest_what' style='color:rgb(255,0,0);text-align:center'><i>Investment project</i></p>");
	}else $("#invest_what").remove();
}

function info_what_commers(){
	var x;
	x=document.getElementById("what_com").checked;
	if(x==true){
	$("#i_what").append("<p id='com_what' style='color:rgb(255,0,0);text-align:center'><i>Commercial</i></p>");
	}else $("#com_what").remove();
}

function info_where_bs(){
	var x;
	x=document.getElementById("where_bs").checked;
	if(x==true){
	$("#i_where").append("<p id='bs_where' style='color:rgb(255,0,0);text-align:center'><i>Burgas</i></p>");
	}else $("#bs_where").remove();
}

function info_where_pom(){
	var x;
	x=document.getElementById("where_pom").checked;
	if(x==true){
	$("#i_where").append("<p id='pom_where' style='color:rgb(255,0,0);text-align:center'><i>Pomorie</i></p>");
	}else $("#pom_where").remove();
}

function info_where_sb(){
	var x;
	x=document.getElementById("where_sb").checked;
	if(x==true){
	$("#i_where").append("<p id='sb_where' style='color:rgb(255,0,0);text-align:center'><i>Sunny Beach</i></p>");
	}else $("#sb_where").remove();
}

function info_where_sv(){
	var x;
	x=document.getElementById("where_sv").checked;
	if(x==true){
	$("#i_where").append("<p id='sv_where' style='color:rgb(255,0,0);text-align:center'><i>St. vlas</i></p>");
	}else $("#sv_where").remove();
}

function info_where_s(){
	var x;
	x=document.getElementById("where_s").checked;
	if(x==true){
	$("#i_where").append("<p id='s_where' style='color:rgb(255,0,0);text-align:center'><i>Sozopol</i></p>");
	}else $("#s_where").remove();
}

function info_where_ts(){
	var x;
	x=document.getElementById("where_ts").checked;
	if(x==true){
	$("#i_where").append("<p id='ts_where' style='color:rgb(255,0,0);text-align:center'><i>Tsarevo</i></p>");
	}else $("#ts_where").remove();
}

function info_where_re(){
	var x;
	x=document.getElementById("where_re").checked;
	if(x==true){
	$("#i_where").append("<p id='re_where' style='color:rgb(255,0,0);text-align:center'><i>Rezovo</i></p>");
	}else $("#re_where").remove();
}

function validate_money(a,b){
	if(document.getElementById("money_any").checked==false){
	var num=/^[0-9]+$/;
	if(a.value.match(num)||b.value.match(num)){
		if(parseInt(a.value)<parseInt(b.value)){
document.getElementById("i_money_i").innerHTML="From:"+a.value+"[EUR]<br />To:"+b.value+"[EUR]";
		}else{
		alert("Value 'To' has to be more than 'From'");
		}
	}else{
	alert("Only numbers pleace!");
	a.value="";
	b.value="";
	}
	}else{
	a.value="";
	b.value="";
	document.getElementById("i_money_i").innerHTML="Any";
	}
}

function validate_properties(a,b){
	if(document.getElementById("pro_any").checked==false){
	var num=/^[0-9]+$/;
	if(a.value.match(num)||b.value.match(num)){
		if(parseInt(a.value)<parseInt(b.value)){
document.getElementById("i_properties_i").innerHTML="From:"+a.value+"[m2]<br />To:"+b.value+"[m2]";
		}else{
		alert("Value 'To' has to be more than 'From'");
		}
	}else{
	alert("Only numbers pleace!");
	a.value="";
	b.value="";
	}
	}else{
	a.value="";
	b.value="";
	document.getElementById("i_properties_i").innerHTML="Any";
	}
}


function f_what(){
	$("#panel").slideToggle();
	$("#panel1").slideUp("fast");
	$("#panel2").slideUp("fast");
	$("#panel3").slideUp("fast");
}

function f_where(){
	$("#panel1").slideToggle();
	$("#panel").slideUp("fast");
	$("#panel2").slideUp("fast");
	$("#panel3").slideUp("fast");
}

function f_money(){
	$("#panel2").slideToggle();
	$("#panel1").slideUp("fast");
	$("#panel").slideUp("fast");
	$("#panel3").slideUp("fast");
}

function f_properties(){
	$("#panel3").slideToggle();
	$("#panel1").slideUp("fast");
	$("#panel2").slideUp("fast");
	$("#panel").slideUp("fast");
}

function f_contacts(){
	$("#panel4").slideToggle();
}
