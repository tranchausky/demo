<?php

$filename ='data/questions1.csv';


/*
//$filename = 'cars.csv';

// The nested array to hold all the arrays
$the_big_array = []; 

// Open the file for reading
if (($h = fopen("{$filename}", "r")) !== FALSE) 
{
  // Each line in the file is converted into an individual array that we call $data
  // The items of the array are comma separated
  while (($data = fgetcsv($h, 1000, "|")) !== FALSE) 
  {
    // Each individual array is being pushed into the nested array
    $the_big_array[] = $data;		
  }

  // Close the file
  fclose($h);
}

// Display the code in a readable format
echo "<pre>";
print_r($the_big_array);
echo "</pre>";

*/
$csv = file($filename, FILE_SKIP_EMPTY_LINES);
$allArray = [];
foreach($csv as $key => $value){
	$data = explode("|",$value);
	$allArray[] = $data;
}

$listQuest = [];
foreach($allArray as $k=>$v){
	$data = [];
	$data[] = $v[1];
	$data[] = $v[2];
	
	if($v[3]){$data[] = $v[3];}
	if($v[4]){$data[] = $v[4];}
	if($v[5]){$data[] = $v[5];}
	$data['more'] = [];
	$data['more']['7'] = $v[7];
	if($v[6]){$data['more']['pic'] = $v[6];}
	if($v[17]){$data['more']['17'] = trim($v[17], "\n");}
	if($v[16]){$data['more']['16'] = $v[16];}
	$listQuest[] = $data;
}

echo "<pre>";
//print_r($allArray);die;
//print_r($listQuest);die;
$data_save = json_encode($listQuest,JSON_UNESCAPED_UNICODE);
$file_save = 'listQuestion_ans.json';
file_put_contents($file_save,$data_save);
echo 'Done';
echo "</pre>";

echo "<pre>";
print_r(json_decode(file_get_contents('listQuestion_ans.json'),true));