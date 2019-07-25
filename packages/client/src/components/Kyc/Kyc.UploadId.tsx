// TODO : IS a old code
import React, { Component, Fragment } from 'react';
import { Button, Divider, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UploadDocument from './Kyc.UploadDocument';
import TakePhoto from './Kyc.TakePhoto';
import DocumentSelector from './Kyc.DocumentSelector';
import Option from './Kyc.Card';
import { CardWrapper } from './Kyc.styles';

class UploadId extends Component {
  static defaultProps = {
    loading: false,
    errorMessage: null,
    onSubmit: (type: string) => (data: any) => {}
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };
  state = {
    disableNext: true,
    showFileUpload: false,
    showTakePhoto: false,
    showTypeSelector: true,
    IDtype: '',
    modalData: {
      title: ''
    },
    modalContext: '',
    files: {},
    documents: [
      {
        option: 'front',
        color: 'black',
        ico: 'id card outline',
        title: 'Document Front',
        description: '',
        showButtonCamera: true,
        showButtonFile: true
      },
      {
        option: 'back',
        color: 'black',
        ico: 'id card',
        title: 'Document Back',
        description: '',
        showButtonCamera: true,
        showButtonFile: true
      },
      {
        option: 'selfie',
        color: 'black',
        ico: 'user outline',
        title: 'Take a selfie',
        description: '',
        showButtonCamera: true,
        showButtonFile: false
      }
    ],
    modalDefinition: {
      front: { title: 'Upload the front of your Document ' },
      back: { title: 'Upload the back of your Document' },
      selfie: { title: 'Take a selfie' }
    }
  };

  handleOption = (option, type) => () => {
    const { modalDefinition } = this.state;

    let updateState = {
      showFileUpload: false,
      showTakePhoto: false,
      modalData: modalDefinition[option],
      modalContext: option
    };

    switch (type) {
      case 'file':
        updateState.showFileUpload = true;
        break;
      case 'camera':
        updateState.showTakePhoto = true;
        break;
      default:
        break;
    }

    this.setState(updateState);
  };

  handleModalClose = () => {
    this.setState({
      showFileUpload: false,
      showTakePhoto: false
    });
  };

  handleRecieveFiles = file => {
    const { modalContext } = this.state;
    const documents = this.state.documents.map(doc => {
      if (doc.option === modalContext) {
        doc.ico = 'check';
        doc.color = 'green';
      }
      return doc;
    });

    this.setState(
      {
        files: Object.assign(this.state.files, {
          [this.state.modalContext]: file
        }),
        showFileUpload: false,
        showTakePhoto: false,
        documents
      },
      () => {
        if (Object.keys(this.state.files).length === 2)
          this.setState({ disableNext: false });
      }
    );
  };

  handleSelectIDType = type => () => {
    this.setState({
      showTypeSelector: false,
      IDtype: type
    });
  };

  handleOnSubmit = () => {
    const { onSubmit }: any = this.props;
    const { files } = this.state;

    onSubmit('verification')({ files });
  };

  render() {
    const {
      documents,
      showFileUpload,
      showTakePhoto,
      modalData,
      showTypeSelector,
      disableNext,
      files
    } = this.state;

    if (showTypeSelector) {
      return <DocumentSelector onSelectIDType={this.handleSelectIDType} />;
    }

    return (
      <Fragment>
        <Divider horizontal>Upload your documents</Divider>
        <CardWrapper>
          {documents.map((doc, i) => {
            return (
              <Option
                key={i}
                data={doc}
                onClick={this.handleOption}
                file={files[doc.option]}
              />
            );
          })}
        </CardWrapper>
        {showFileUpload && (
          <UploadDocument
            onClose={this.handleModalClose}
            data={modalData}
            onSuccess={this.handleRecieveFiles}
          />
        )}
        {showTakePhoto && (
          <TakePhoto
            onClose={this.handleModalClose}
            data={modalData}
            onSuccess={this.handleRecieveFiles}
          />
        )}
        <Container textAlign="right">
          <Button
            disabled={disableNext}
            icon="arrow right"
            color="teal"
            labelPosition="right"
            onClick={this.handleOnSubmit}
            content="Next"
          />
        </Container>
      </Fragment>
    );
  }
}

export default UploadId;
