import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons/lib/icons';
import { Container, Label, SocialBtn } from './Social.styles';

const styles = {
  facebookOutlined: {
    color: '#4267B2',
    margin: '0px 4px'
  },
  googleOutlined: { color: '#DB4437', margin: '0px 4px' }
};

const ModalSocial = () => {
  return (
    <Container>
      <Label>Войти как пользователь</Label>
      <SocialBtn>
        <FacebookOutlined style={styles.facebookOutlined} />
        Facebook
      </SocialBtn>
      <SocialBtn>
        <GoogleOutlined style={styles.googleOutlined} />
        Google
      </SocialBtn>
    </Container>
  );
};

export default ModalSocial;
