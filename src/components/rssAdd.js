import React from 'react';
import { Typography, TextField, Button, Grid } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const RssAddComponent = ({addRss}) => {
  const formik = useFormik({
    initialValues: {
      rss_name: "",
      rss_url: "",
    },
    validationSchema: yup.object().shape({
      rss_name: yup
        .string()
        .required("必須です"),
        rss_url: yup
        .string()
        .required("必須です")
        .matches(
          /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,
          "URLの形式が不正です"
        ),
    }),
    onSubmit: values => {
      const name = values.rss_name.trim();
      const url = values.rss_url.trim();
      addRss(name, url);
    }
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5">RSS追加</Typography>
          </Grid>

          <Grid item xs={12}>
            {formik.touched.rss_name && formik.errors.rss_name ? (
              <TextField error label="RSS名" name="rss_name" onChange={formik.handleChange} value={formik.values.rss_name} helperText={formik.errors.rss_name} fullWidth />
            ) : 
              <TextField label="RSS名" name="rss_name" onChange={formik.handleChange} value={formik.values.rss_name}  fullWidth />
            }
          </Grid>
          <Grid item xs={12}>
            {formik.touched.rss_url && formik.errors.rss_url ? (
              <TextField error label="URL" name="rss_url" onChange={formik.handleChange} value={formik.values.rss_url} helperText={formik.errors.rss_url} fullWidth />
            ) : 
              <TextField label="URL" name="rss_url" onChange={formik.handleChange} value={formik.values.rss_url} fullWidth />
            }
          </Grid>
          <Grid item xs={12}>
            <Link to='/' color="inherit" style={{textDecoration:'none', color:'inherit'}}>
              <Button variant="contained" fullWidth >戻る</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth >登録</Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

export default RssAddComponent;