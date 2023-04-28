function set_partition_change_handler() {
  let partition_select = $("#batch_connect_session_context_bc_partition");
  partition_select.change( function(e) {
    toggle_gpu_visibility(e);
  });
}

function toggle_gpu_visibility(event) {
  const show = /pascalnodes/.test(event.target.value);
  const selector = '#batch_connect_session_context_bc_num_gpus';
  toggle_visibilty_of_form_group(selector, show);
}

function toggle_visibilty_of_form_group(form_id, show) {
  let form_element = $(form_id);
  let parent = form_element;

  while (
    (! parent[0].classList.contains('form-group')) &&
    (! parent.is('html')) // ensure that we don't loop infinitely
  ) {
    parent = parent.parent();
  }

  // If parent is HTML then something has gone wrong and visibility should not be changed
  if ( parent.is('html') ) {
    return;
  }

  if(show) {
    parent.show();
  } else {
    parent.hide();
  }
}

toggle_gpu_visibility(
  // Fake the event
  { target: document.querySelector('#batch_connect_session_context_bc_num_gpus') }
);
set_partition_change_handler();
