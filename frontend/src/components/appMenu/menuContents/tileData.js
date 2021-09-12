// This file is shared across the demos.
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import HomeIcon from '@material-ui/icons/Home';
import DownloadIcon from '@material-ui/icons/GetApp';
import EditIcon from '@material-ui/icons/BorderColor';
import VideoIcon from '@material-ui/icons/Videocam';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RestaurantIcon from '@material-ui/icons/RestaurantMenu';
import NumberedIcon from '@material-ui/icons/FormatListNumbered';
import Divider from '@material-ui/core/Divider';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { Link } from 'react-router-dom';

export const menuItems = (
  <div>
    <Link to={'/'}>
      <ListItem button>
        <ListItemIcon>
          <RestaurantIcon />
        </ListItemIcon>
        <ListItemText primary="Search Recipes" />
      </ListItem>
    </Link>
    <Divider />
    <Link to={'/shopping'}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Shopping List" />
      </ListItem>
    </Link>
    <Link to={'/products'}>
      <ListItem button>
        <ListItemIcon>
          <NumberedIcon />
        </ListItemIcon>
        <ListItemText primary="Products Info" />
      </ListItem>
    </Link>
    <Divider />
    <Link to={'/write'}>
      <ListItem button>
        <ListItemIcon>
          <PostAddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Recipes" />
      </ListItem>
    </Link>
    <Link to={'/edit'}>
      <ListItem button>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit/Delete/Upload" />
      </ListItem>
    </Link>
    <Link to={'/video'}>
      <ListItem button>
        <ListItemIcon>
          <VideoIcon />
        </ListItemIcon>
        <ListItemText primary="Upload Videos" />
      </ListItem>
    </Link>
    <Divider />
    <Link to={'/download'}>
      <ListItem button>
        <ListItemIcon>
          <DownloadIcon />
        </ListItemIcon>
        <ListItemText primary="Download" />
      </ListItem>
    </Link>
  </div>
);

export default menuItems;
