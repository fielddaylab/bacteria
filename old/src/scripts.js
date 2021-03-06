var d;
var g;
var g_basic;
var games = {};

function size_prefix(prefix)
{
  var parent = $('#'+prefix+"stage_container").parent();
  var w = parent.width() - 10;
  var h = parent.height() - 10;
  console.log(parent);

  $('#'+prefix+"stage_container").css('width', w+"px");
  $('#'+prefix+"stage_container").css('height', h+"px");

  return [w, h];
}

function begin()
{
  var prefix = "";
  var w = 640;
  var h = 320;
  var wh;
  //$("#debug_div").css('width', w+"px");
  //$("#debug_div").css('height', h+"px");
  //d = new Debugger({source:$("#debug_div")[0]});

  prefix = "basic_";
  wh = size_prefix(prefix);
  w = wh[0];
  h = wh[1];
  g = new Game({width:w,height:h,container:prefix+"stage_container",popup:prefix+"popup",
    config:
    {
      special:SPECIAL_NONE,
      grid_x:0,
      grid_y:0,
      grid_w:-1,
      grid_h:-1,
      grid_cols:Math.floor(w/17),
      grid_rows:Math.floor(h/17),
      colored_rgb:false,
      default_r:0.5,
      default_g:0.5,
      default_b:0.5,
      colored_hsl:false,
      default_h:150,
      default_s:1,
      default_l:0.7,
      colorblind:false,
      sim_speed:1,
      badb_sim_speed:1,
      allow_sim_speed_slider:false,
      sim_speed_min:1,
      sim_speed_max:2,
      hover_to_play:true,
      display_pause:true,
      allow_dose_slider:false,
      allow_dose_button:false,
      dose_chip_damage:false,
      allow_smile:false,
      allow_reset:true,
      prompt_reset_on_empty:false,
      allow_contaminate:false,
      default_badb_resist:0.,
      init_badb:false,
      reinit_badb:false,
      default_good_resist:0.,
      allow_good:false,
      init_good:false,
      reinit_good:false,
      allow_body:false,
      init_body:false,
      reinit_body:false,
      swab_size:1,
      click_function:CLICK_FUNC_BADB,
      hover_function:CLICK_FUNC_NONE,
      show_hover:false,
      prerequisite_fill_for_interaction:0.,
      prompt_prerequisite_unmet:false,
      mutate_random_assign:false,
      mutate_rate:0,
      mutate_distance:0,
      bias_mutate:false,
      reproduce:true,
      age:true,
      ave_display_width:0,
      split_display_width:0,
      tricolor_display_width:0,
      hsl_display_width:0,
    }
  });
  games[prefix] = g;
  g.begin();

  prefix = "biodiversity_";
  wh = size_prefix(prefix);
  w = wh[0];
  h = wh[1];
  g = new Game({width:w,height:h,container:prefix+"stage_container",popup:prefix+"popup",
    config:
    {
      special:SPECIAL_NONE,
      grid_x:0,
      grid_y:0,
      grid_w:-1,
      grid_h:-1,
      grid_cols:Math.floor(w/17),
      grid_rows:Math.floor(h/17),
      colored_rgb:false,
      default_r:0.5,
      default_g:0.5,
      default_b:0.5,
      colored_hsl:false,
      default_h:150,
      default_s:1,
      default_l:0.7,
      colorblind:false,
      sim_speed:1,
      badb_sim_speed:1,
      allow_sim_speed_slider:false,
      sim_speed_min:1,
      sim_speed_max:2,
      hover_to_play:true,
      display_pause:true,
      allow_dose_slider:false,
      allow_dose_button:false,
      dose_chip_damage:false,
      allow_smile:false,
      allow_reset:true,
      prompt_reset_on_empty:false,
      allow_contaminate:false,
      default_badb_resist:0.,
      init_badb:false,
      reinit_badb:false,
      default_good_resist:0.,
      allow_good:false,
      init_good:false,
      reinit_good:false,
      allow_body:false,
      init_body:false,
      reinit_body:false,
      swab_size:1,
      click_function:CLICK_FUNC_BADB,
      hover_function:CLICK_FUNC_NONE,
      show_hover:false,
      prerequisite_fill_for_interaction:0.,
      prompt_prerequisite_unmet:false,
      mutate_random_assign:false,
      mutate_rate:1,
      mutate_distance:0.2,
      bias_mutate:false,
      reproduce:true,
      age:true,
      ave_display_width:0,
      split_display_width:0,
      tricolor_display_width:0,
      hsl_display_width:0,
    }
  });
  games[prefix] = g;
  g.begin();

  prefix = "killbutton_";
  wh = size_prefix(prefix);
  w = wh[0];
  h = wh[1];
  g = new Game({width:w,height:h,container:prefix+"stage_container",popup:prefix+"popup",
    config:
    {
      special:SPECIAL_NONE,
      grid_x:0,
      grid_y:0,
      grid_w:w-100,
      grid_h:-1,
      grid_cols:Math.floor((w - 100)/17),
      grid_rows:Math.floor(h/17),
      colored_rgb:false,
      default_r:0.5,
      default_g:0.5,
      default_b:0.5,
      colored_hsl:false,
      default_h:150,
      default_s:1,
      default_l:0.7,
      colorblind:false,
      sim_speed:1,
      badb_sim_speed:1,
      allow_sim_speed_slider:false,
      sim_speed_min:1,
      sim_speed_max:2,
      hover_to_play:true,
      display_pause:true,
      allow_dose_slider:false,
      allow_dose_button:true,
      dose_chip_damage:true,
      allow_smile:false,
      allow_reset:true,
      prompt_reset_on_empty:false,
      allow_contaminate:false,
      default_badb_resist:0.,
      init_badb:false,
      reinit_badb:false,
      default_good_resist:0.,
      allow_good:false,
      init_good:false,
      reinit_good:false,
      allow_body:false,
      init_body:false,
      reinit_body:false,
      swab_size:1,
      click_function:CLICK_FUNC_BADB,
      hover_function:CLICK_FUNC_NONE,
      show_hover:false,
      prerequisite_fill_for_interaction:0.,
      prompt_prerequisite_unmet:false,
      mutate_random_assign:false,
      mutate_rate:1,
      mutate_distance:0.2,
      bias_mutate:false,
      reproduce:true,
      age:true,
      ave_display_width:10,
      split_display_width:0,
      tricolor_display_width:0,
      hsl_display_width:0,
    }
  });
  games[prefix] = g;
  g.begin();
}
//window.addEventListener('touchstart', function(e){ e.preventDefault() }); //prevent browser from doing anything funny
window.addEventListener("load",begin,false);
