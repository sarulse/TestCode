<?php
error_reporting(0);

class RepeatedLetters {

    private $inputFile;    
    public function __construct($inputFile){
        $this->inputFile = $inputFile;
    }    
    //Get the input text
    public function get_text(){
        $inputPath = $this->inputFile;        
        //For windows Filesystems   
        if (preg_match('/\\\\/', $inputPath)) {           
            $inputPath =  preg_replace('/\\\\/','/',$inputPath);               
        }        
        if ($file = fopen($inputPath, "r")) {                   
            $text = file_get_contents($inputPath);
            return $text;
        }
        fclose($file);  
    }
    //Form a string Array with valid strings to count valid chars
    public function form_strArray($inputText){
        echo "Input: ".$inputText."\n";        
        $inputString = preg_split('/[^!-~]+/', $inputText);        
        $strArray = array_values($inputString);        
        return $strArray;
    }
    //Count the number of characters in the string Array and return the winning word
    public  function count_alphaChars($arrStrings){                         
        foreach ($arrStrings as $key=>$str){            
            $tmpStr = strtolower($str);            
            //Replace all non-alpha chars to empty string in the temp string to count max-repeated char
            $tmpStr = preg_replace('/[^a-z]/', '', $tmpStr);           
            $tmpStrArr = count_chars($tmpStr, 1);            
            $max_num_repeat = max($tmpStrArr);            
            // Form an array with string and the max number of repeated chars
            $outputArr[$str] = $max_num_repeat;            
        }        
        $max_char_count = max($outputArr);
        //Use the highest repeated letter count to find the winning word        
        $win_word = array_search($max_char_count, $outputArr);        
        return $win_word;       
    }     
}
//Get the Input file from command line
$input_file = $argv[1];
//Instantiate RepeatedLetters to find the winning word
$rep_let_obj = new RepeatedLetters($input_file);
$input_text = $rep_let_obj->get_text();
$arrOfStrs = $rep_let_obj->form_strArray($input_text);
$win_word = $rep_let_obj->count_alphaChars($arrOfStrs);
if (preg_match('/[a-z]+/i',$win_word))
echo "Output: ".$win_word;

?>
