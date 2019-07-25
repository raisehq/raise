// TODO : IS a old code
import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';
import { Modal, Segment, Image, Button, Form, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { UploadSectionStyled, ThumbsContainerStyled } from './Kyc.styles';

class UploadDocument extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
    data: PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  };
  state = {
    file: null,
    disableAccept: true,
    loading: false
  };

  onDrop = files => {
    const _this = this;

    this.setState(
      {
        loading: true
      },
      () => {
        const reader = new FileReader();
        reader.addEventListener(
          'load',
          function() {
            _this.setState({
              disableAccept: false,
              file: reader.result,
              loading: false
            });
          },
          false
        );
        if (files) {
          reader.readAsDataURL(files[0]);
        }
      }
    );
  };
  handleSuccess = () => {
    const { onSuccess }: any = this.props;
    const { file } = this.state;

    if (onSuccess) {
      onSuccess(file);
    }
  };

  render() {
    const { data, onClose }: any = this.props;
    const { file, disableAccept, loading } = this.state;

    const thumbs = file ? (
      <ThumbsContainerStyled>
        <Image src={file} />
      </ThumbsContainerStyled>
    ) : (
      ''
    );

    return (
      <Modal dimmer="blurring" open onClose={onClose}>
        <Modal.Header>{data.title}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Form size="mini" loading={loading}>
              <Dropzone onDrop={this.onDrop}>
                {({ getRootProps, getInputProps, isDragActive }) => {
                  return (
                    <div>
                      <Segment placeholder>
                        <UploadSectionStyled
                          {...getRootProps()}
                          refs="dropzone-id"
                          hasdrop={isDragActive ? 'true' : 'false'}
                        >
                          <input {...getInputProps()} />
                          {isDragActive ? (
                            <Fragment>
                              <Icon size="huge" name="file alternate outline" />
                              <span>Drop files here... </span>
                            </Fragment>
                          ) : (
                            <Fragment>
                              <Icon size="huge" name="file alternate outline" />
                              <span>
                                Try dropping some files here, or click to select
                                files to upload.
                                {thumbs}
                              </span>
                            </Fragment>
                          )}
                        </UploadSectionStyled>
                      </Segment>
                    </div>
                  );
                }}
              </Dropzone>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" onClick={onClose}>
            Cancel
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Accept"
            disabled={disableAccept}
            onClick={this.handleSuccess}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
export default UploadDocument;
