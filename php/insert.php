<?php
include_once 'db.php';
if(isset($_POST['submit']))
{
     $nama = $_POST['nama'];
     $lokasi = $_POST['lokasi'];
     $kehadiran = $_POST['kehadiran'];
     $ucapan = $_POST['ucapan'];
     $sql = "INSERT INTO `kirim-doa` (`nama`, `kota`, `kehadiran`, `ucapan`) VALUES ('$nama', '$lokasi', '$kehadiran', '$ucapan')";
     if (mysqli_query($conn, $sql)) {
        echo "success";
     } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
     }
     mysqli_close($conn);
}
   // header('Location: ../index.html');
?>
