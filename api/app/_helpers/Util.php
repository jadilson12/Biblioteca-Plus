<?php


namespace App\_helpers;


class Util
{

    public static function convertDate($date)
    {
        try {
            $dt_lacamento = new \DateTime($date);
            return $dt_lacamento = date_format($dt_lacamento, 'Y-m-d');
        } catch (\Exception $e) {
            return response(['message' => 'Failed Convert Date'],404);
        }
    }

}
