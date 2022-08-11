import { ModalBackground } from "../../styles/modal";
import { Spinner } from "../../styles/spinner";

function Loading() {
  return (
    <ModalBackground>
      <Spinner />
    </ModalBackground>
  );
}

export default Loading;
