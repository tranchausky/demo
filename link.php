<?php
	
	function Redirect($url, $permanent = false)
{
    header('Location: ' . $url, true, $permanent ? 301 : 302);

    exit();
}

//Redirect('http://example.com/', false);

	if(isset($_GET['u']))
		Redirect($_GET['u'],false);
	Redirect('../',false);
		