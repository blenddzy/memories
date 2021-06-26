import { useState } from 'react'
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core'; 
import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/posts';

const Form = (e) => {    
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creando recuerdo</Typography>
                <TextField  name="creator"  variant="outlined" label="Nombre" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData,  creator: e.target.value })} />
                <TextField  name="title"  variant="outlined" label="Titulo" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData,  title: e.target.value })} />
                <TextField  name="message"  variant="outlined" label="Mensaje" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData,  message: e.target.value })} />
                <TextField  name="tags"  variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData,  tags: e.target.value })} />
                <div><FileBase type="file" multiple="{false}" onDone="{(base64) => setPostData ({ ...postData, selectedFile: base64 })}" /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Subir</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Limpiar</Button>

            </form>
        </Paper>
    );
}

export default Form;