import styled from 'styled-components';
import { Modal as SemanticModal, Button as SemanticButton } from 'semantic-ui-react';

export const Modal = styled(SemanticModal)`
&&&&, &&&& > iframe {
  border: 0;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
  max-width: 600px;
  min-width: 300px;
}
`
export const Button = styled(SemanticButton)`
&&&& {
  display: block;
  margin: 0 auto;
  border: 1px solid lightgrey;
  border-radius: 10px;
  background: white;
  font-size: 16px;
  color: rgb(220, 107, 229);
}
&&&&:hover {
  background: rgba(220, 107, 229, 0.07)
}
`