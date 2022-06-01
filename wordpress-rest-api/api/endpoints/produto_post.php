<?php

function api_produto_post($request) {
  $user = wp_get_current_user();
  $user_id = $user->ID;

  if($user_id > 0) {
    $referenciaProduto = sanitize_text_field($request['referenciaProduto']);
    $tituloProduto = sanitize_text_field($request['tituloProduto']);
    $valorProduto = sanitize_text_field($request['valorProduto']);
    $descricaoProduto = sanitize_text_field($request['descricaoProduto']);
    $usuario_id = $user->user_login;

    $response = array(
      'post_author' => $user_id,
      'post_type' => 'produto',
      'post_title' => $nome,
      'post_status' => 'publish',
      'meta_input' => array(
        'referenciaProduto' => $referenciaProduto,
        'tituloProduto' => $tituloProduto,
        'valorProduto' => $valorProduto,
        'descricaoProduto' => $descricaoProduto,
        'usuario_id' => $usuario_id,
        'vendido' => 'false',
      ),
    );

    $produto_id = wp_insert_post($response);
    $response['id'] = get_post_field('post_name', $produto_id);

    $files = $request->get_file_params();

    if($files) {
      require_once(ABSPATH . 'wp-admin/includes/image.php');
      require_once(ABSPATH . 'wp-admin/includes/file.php');
      require_once(ABSPATH . 'wp-admin/includes/media.php');

      foreach ($files as $file => $array) {
        media_handle_upload($file, $produto_id);
      }
    }
  } else {
    $response = new WP_Error('permissao', 'Usuário não possui permissão.', array('status' => 401));
  }
  return rest_ensure_response($response);
}

function registrar_api_produto_post() {
  register_rest_route('api/v1', '/produto', array(
    array(
      'methods' => WP_REST_Server::CREATABLE,
      'callback' => 'api_produto_post',
    ),
  ));
}

add_action('rest_api_init', 'registrar_api_produto_post');


?>