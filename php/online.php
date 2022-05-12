<?php
$channel = 'stray228'; // название канала
$request_params = array(
    'client_id' => 'qa5191fkn3jvtajqg2srrffxsmyxmeg'
    );
 
$params = http_build_query($request_params);
$result = json_decode(file_get_contents('https://api.twitch.tv/kraken/streams/'. $channel . '/?'. $params));
 
/* готовим переменные */
$game_ID = $result -> stream -> id; // идентификатор стрима
$stream_name = $result -> stream -> game; // название игры
$stream_status = $result -> stream -> channel -> status; // название стрима
$url_channel = $result -> stream -> channel -> url; // прямая ссылка на канал
$img_preview = $result -> stream -> preview -> medium; // превью стрима
 
 
/* первое условие, если канал в offline */
if ($result -> stream == null) {
    echo 'канал в оффлайне!';
} else {
    echo 'Канал онлайн!';
    echo '<a href="' . $url_channel . '">' . $stream_status . '</a>';
    echo '<a href="' . $url_channel . '"><img src="' . $img_preview . '" /></a><br><br>';
}
 
?>