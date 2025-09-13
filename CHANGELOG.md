# Changelog

## [Unreleased]

### Changed

- **Tailwind CSS**: Downgraded from v4 to v3.4.17 for compatibility and stability
  - v4 was causing build issues and compatibility problems with existing tooling
  - v3.4.17 provides better stability and broader ecosystem support
  - This change affects the build system but maintains all existing functionality

### Fixed

- Renamed SCSS function `padding-with-border` to `adjust-padding-for-border` for better clarity
- Clarified phone number regex comments about leading zeros in local numbers
- Added documentation about color space change from oklch to HSL in globals.css
- Fixed CSS border width calculation using custom properties for better maintainability
- Enhanced i18n TODO comment with specific timeline and priorities
