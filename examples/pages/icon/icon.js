import CustomPage from '../../utils/page';
const iconNames = [

  "watch_later",


  "lock_outline",


  "lock_open",


  "no_encryption",


  "enhanced_encryption",


  "drive_eta",


  "access_time",


  "block",


  "timer",


  "https",


  "security",


  "person_search",


  "person_remove",


  "person_remove_alt_1",


  "person_add_alt_1",


  "person_add_alt",


  "person_add_disabled",


  "supervised_user_circle",


  "card_membership",


  "verified_user",


  "person_outline",


  "perm_identity",


  "person_add",


  "person",


  "phone_callback",


  "phone_paused",


  "phone_missed",


  "phone_locked",


  "phone_in_talk",


  "phone_forwarded",


  "phone_bluetooth_speaker",


  "phonelink_off",


  "phone_iphone",


  "phone_android",


  "headset_mic",


  "devices",


  "phonelink",


  "add_call",


  "call_missed_outgoing",


  "phonelink_setup",


  "phonelink_ring",


  "phonelink_lock",


  "phonelink_erase",


  "swap_calls",


  "speaker_phone",


  "contact_phone",


  "call_split",


  "call_received",


  "call_missed",


  "call_merge",


  "merge_type",


  "call_made",


  "call_end",


  "missed_video_call",


  "video_call",


  "call_to_action",


  "mic_off",


  "mic_none",


  "announcement",


  "microwave",


  "mic",


  "stay_current_portrait",


  "stay_primary_portrait",


  "smartphone",


  "call",


  "wifi_calling",


  "mic_external_on",


  "mic_external_off",


  "dynamic_form",


  "dynamic_feed",


  "phone_enabled",


  "phone_disabled",


  "add_ic_call",


  "settings_phone",


  "perm_phone_msg",


  "perm_camera_mic",


  "phone",


  "local_phone",


  "check_circle_outline",


  "check_circle",


  "check_box",


  "playlist_add_check",


  "check",


  "refresh",


  "repeat",


  "loop",


  "access_alarm",


  "alarm",


  "notifications_on",


  "notifications_off",


  "notifications_none",


  "notifications",


  "power_settings_new",


  "settings",


  "photo_camera_front",


  "photo_camera_back",


  "flip_camera_ios",


  "flip_camera_android",


  "camera_enhance",


  "perm_camera_mic1",


  "linked_camera",


  "switch_camera",


  "camera_roll",


  "camera_alt",


  "control_camera",


  "camera",


  "close_fullscreen",


  "exit_to_app",


  "fullscreen_exit",


  "transit_enterexit",


  "closed_caption",


  "clear",


  "cancel",


  "logout",


  "person_search1",


  "image_search",


  "gps_not_fixed",


  "bluetooth_searching",


  "search",


  "leave_bags_at_home",


  "house_siding",


  "home_repair_service",


  "home_work",


  "home_filled",


  "add_to_home_screen",


  "house",


  "home",


  "arrow_circle_up",


  "arrow_circle_down",


  "double_arrow",


  "arrow_right_alt",


  "compare_arrows",


  "arrow_forward_ios",


  "arrow_back_ios",


  "arrow_right",


  "arrow_left",


  "arrow_downward",


  "subdirectory_arrow_right",


  "subdirectory_arrow_left",


  "arrow_upward",


  "arrow_forward",


  "arrow_drop_up",


  "arrow_drop_down_circle",


  "arrow_drop_down",


  "arrow_back",


  "keyboard_arrow_up",


  "keyboard_arrow_right",


  "keyboard_arrow_left",


  "keyboard_arrow_down",


  "play_arrow",


];
CustomPage({
  data: {
    example1Des: `属性：
    name = "arrow_right"
    size = "40" (rpx)
    color = "#00A19C"`,
    iconNames: iconNames,
    inputValue: '',
  },
  bindinput(e) {
    this.setData({
      inputValue: e.detail.value
    });
    if(!e.detail.value){
      this.setData({
        iconNames: iconNames
      });
    }
  },
  clear() {
    if (this.data.inputValue === '') return;
    this.setData({
      inputValue: '',
      iconNames: iconNames
    });
  },
  search() {

    const val = this.data.inputValue.trim();
    if (!val) return;
    const searchRes = iconNames.filter(item => item.includes(val));
    if (!searchRes.length) wx.showToast({
      icon: 'none',
      title: '没有搜索到你要的内容'
    });
    this.setData({
      iconNames: searchRes
    });
  }
})
