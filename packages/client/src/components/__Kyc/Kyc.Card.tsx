import React from 'react';
import { Theme } from 'hero-ui';
import { Card, Button, Image } from 'semantic-ui-react';
import { CardPlaceholder, ImageHolder } from './Kyc.styles';

const getURL = file => {
  return file.preview || file;
};

const Option = ({ data, file, onClick }) => (
  <Card>
    <CardPlaceholder>
      {!file && <Image src={`${Theme.static}/default-image.png`} />}
      {file && (
        <ImageHolder>
          <Image className="uploadedImage" src={getURL(file)} />
        </ImageHolder>
      )}
    </CardPlaceholder>
    <Card.Content>
      <Card.Header>{data.title}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <Button
        icon="upload"
        content="Upload"
        onClick={onClick(data.option, 'file')}
      />
      <Button
        icon="camera"
        content="Camera"
        onClick={onClick(data.option, 'camera')}
      />
    </Card.Content>
  </Card>
);

export default Option;
