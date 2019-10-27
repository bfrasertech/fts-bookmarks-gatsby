import createMuiTheme, {
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';

export default function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    appDrawer: {
      breakpoint: 'lg',
      width: 225,
    },
    contentBackground: '#000',
    ...options,
  });
}
