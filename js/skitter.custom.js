  $('.skitter-large').skitter({
    label: false,
    theme: 'square',
    velocity: 1,
    interval: 1500,
    animation: '',
    numbers: false,
    image_i: 3,
    is_animating: true,
    show_randomly: true,
    thumbs: false,
    hide_tools: false,
    fullscreen: false,
    dots: false,
    opacity_elements: 0.75,
    // Interval animation hover elements hide_tools
    interval_in_elements: 200,
    // Interval animation out elements hide_tools
    interval_out_elements: 300,
    // Onload Callback
    onLoad: null,
    // Preview with dots
    preview: true,
    focus: true,
    foucs_active: false,
    controls: false,
    progressbar: false,
    progressbar_css: {},
    is_paused: false,
    is_blur: false,
    is_paused_time: false,
    time_start: 0,
    elapsedTime: 0,
    stop_over: false,
    enable_navigation_keys: false,
    with_animations: [],
    mouseOverButton: null,
    mouseOutButton: null,
    auto_play: true,
    label_animation: 'slideUp',
    theme: null,

    responsive: {
      small: {
        animation: 'fade',
        max_width: 768,
      },
      medium: {
        max_width: 1024,
      },
    },
  })