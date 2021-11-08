import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  title: {
    display: 'flex',
    justifyContent: 'right',
  },
}));

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const fontStyle = { fontSize: '18px', textDecoration: 'none', fontStyle: 'bold' };
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className={classes.title}>
      <Tabs
        value={value}
        textColor="secondary"
        indicatorColor="secondary"
        onChange={handleChange}
        aria-label="nav tabs"
        className={classes.menuButton}
      >
        <LinkTab label="온도계" href="/thermometer" style={fontStyle} />
        <LinkTab label="온도변화" href="/temperature-variant" style={fontStyle} />
        <LinkTab label="온도캘린더" href="/calendar" style={fontStyle} />
        <LinkTab label="사용자정보" href="/user-info" style={fontStyle} />
        <LinkTab label="검색" href="/" style={fontStyle} />
      </Tabs>
    </Box>
  );
}
