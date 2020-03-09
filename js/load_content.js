function loadContent (pageTitle) {
	var header_content = "<a href='index.html'><div class='row'><div class='col-md-2'><img src='./images/logo.jpeg' alt='logo' width=100 height=100 /></div><div class='col-md-8'><center><h1 class='custom-header'>Sahayahastha Charitable Trust</h1><h3 class='custom-header'>Reg. No. 126/IV/19</h3></center></div></div></a>";
	var nav_content = '<nav id="navstep" class="navbar navbar-expand-lg navbar-light bg-light sticky-top"><button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarToggler"><ul class="navbar-nav nav-pills mx-auto"><li id="index" class="nav-link active"><a href="index.html">Home</a></li><li id="people" class="nav-link"><a href="people.html">People</a><li id="contact" class="nav-link"><a href="contact.html">Contact</a></li></ul></div></nav>';
	var footer_content = '<hr><footer><center><h5 style="color: #D3D3D3;">Created and maintained by GSK &copy; 2020</h5></center></footer><hr>';
	document.getElementById('headerContent').innerHTML = header_content;
	document.getElementById('navContent').innerHTML = nav_content;
	document.getElementById('footerContent').innerHTML = footer_content;
	$("li.nav-link").attr("class", "nav-link");
	document.getElementById(pageTitle).setAttribute("class", "nav-link active");
}