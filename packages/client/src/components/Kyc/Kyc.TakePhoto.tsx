// TODO : IS a old code
import React from 'react';
import Webcam from 'react-webcam';
import { Modal, Button, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { WebcamWrapper } from './Kyc.styles';

const WebcamContainerStyled = styled.div`
  text-align: 'center';
`;

const ThumbStyled = styled.div`
  display: 'inline-flex';
  border-radius: 2;
  border: '1px solid #eaeaea';
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4;
`;

const ThumbInnerStyled = styled.div`
  display: 'flex';
  min-width: 0;
  overflow: 'hidden';
`;

class TakePhoto extends React.Component {
  private webcam: any = null;

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
    data: PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  };

  state = {
    videoConstraints: {
      width: 1280,
      height: 720,
      facingMode: 'user'
    },
    file: null,
    disableAccept: true
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  handleCapture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      file: imageSrc,
      disableAccept: false
    });
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
    const { videoConstraints, file, disableAccept } = this.state;

    const Thumb = (
      <ThumbStyled>
        <ThumbInnerStyled>
          <Image src={file} size="small" />
        </ThumbInnerStyled>
      </ThumbStyled>
    );

    const Cam = (
      <WebcamWrapper>
        <Webcam
          width="100%"
          audio={false}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="webcam"
        />
        <Button primary onClick={this.handleCapture}>
          Capture photo
        </Button>
      </WebcamWrapper>
    );

    return (
      <Modal dimmer="blurring" open onClose={onClose}>
        <Modal.Header>{data.title}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <WebcamContainerStyled>{file ? Thumb : Cam}</WebcamContainerStyled>
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
export default TakePhoto;
