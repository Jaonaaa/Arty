<?php
defined('BASEPATH') or exit('No direct script access allowed');

class MyException extends CI_Model
{
    public $errorNumber;
    public $errorMessage;

    public function errorDB($connection)
    {
        $error = $connection->error();
        if ($error['code'] != "00000") {
            $this->errorMessage = $error['message'];
            $this->errorNumber = $error['code'];
            return $this;
        } else {
            // if false everything is alright
            return false;
        }
        /**
         * use if(result)  to check if there is no error
         */
    }

    public function getErrorMessage()
    {
        return json_encode(array("status" => "error", "details" => $this->errorMessage));
    }
}