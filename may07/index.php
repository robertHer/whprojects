<?php
    $a = 'robe';
    $b = 25;
    $c = $a + $b;
    $d = 'black';

?>

<?php
$x = 5;
function test($myVar){
    echo "This is the value of x: " . $myVar;
    echo $y;
}
test($x);

function test2(){
    global $y;
    $y = 6;

}
    test2();
    echo $y;

?>

<!-- <p> Hello -->
    <!-- <?php  -->
    // $txt = $first . $last ;
    // print $txt;
    //    echo $a; ?>, Welcome to my Site
</p>

<p>
My car is <?php echo $d; ?>

</p>

<!-- <p>The answer is <?php echo $c; ?></p> -->