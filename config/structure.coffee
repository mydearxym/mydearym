# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Index"
      id: "index"
      location: "example#dashboard" # Supersonic module#view type navigation
    }
    {
      title: "family"
      id: "family"
      location: "example#family-config"
    }
    {
      title: "Internet"
      id: "internet"
      location: "http://google.com" # URLs are supported!
    }
  ]

  rootView:
    location: "example#dashboard"

  preloads: [
    {
      id: "settings"
      title: "Settings"
      location: "example#settings"
    }

    {
      id: "learn-more"
      location: "example#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
  ]

  drawers:
    left:
      id: "leftDrawer"
      location: "example#ice-box"
      showOnAppLoad: false
    options:
      animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
