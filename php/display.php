<?php

    include_once 'db.php';
    
    $sql = "SELECT * FROM `kirim-doa` ORDER BY `id` DESC ";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {

            if ($row["kehadiran"] == 'hadir') {
                $kehadiran = '<span class="hadir">' .
                                'Hadir' .
                            '</span>';
            } elseif ($row["kehadiran"] == 'mungkin-hadir') {
                $kehadiran = '<span class="m-hadir">' .
                                'Mungkin Hadir' .
                            '</span>';
            } else {
                $kehadiran = '<span class="t-hadir">' .
                                'Tidak Hadir' .
                            '</span>';
            }

            echo '<div class="data-doa">' .
                    '<div class="name-doa mt-1">' .
                        $row["nama"] .
                    '</div>' .
                    '<div class="location-and-present mt-1">' .
                        '<span class="location-name">' .
                            "Di " . $row["kota"] . " " .
                        '</span>' .
                        $kehadiran .
                    '</div>'.
                    '<div class="doa-value mt-1">' .
                       '" ' . $row["ucapan"] . ' "' .
                    '</div>' .
                '</div>';
        }
    } else {
        echo "0 results";
    }

    mysqli_close($conn);

?>