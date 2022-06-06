import styled from 'styled-components';
import {
  ChangeEvent,
  useRef, useState,
} from 'react';

const Input = styled.input`
  display: none;
`;

const Container = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

const Upload = ({
  children, droppable, name, accept, value, onChange, ...props
}:any) => {
  const [file, setFile] = useState(value);
  const [dragging, setDragging] = useState(false);

  const inputRef:React.MutableRefObject<HTMLInputElement | null> = useRef(null);

  const handleFileChange = (e:ChangeEvent) => {
    const { files } = e.target as HTMLInputElement;
    if (!files) return;
    const changeFile = files[0];
    setFile(changeFile);
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(changeFile);
  };

  const handleChooseFile = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const handleDragEnter = (e:DragEvent) => {
    if (!droppable) return;
    e.preventDefault(); // 브라우저 기본 이벤트 막기
    e.stopPropagation(); // 부모나 자식 컴포넌트로 이벤트 전파되는 것 막기

    if (e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };

  const handleDragLeave = (e:DragEvent) => {
    if (!droppable) return;
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);
  };

  const handleDragOver = (e:DragEvent) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();
  };

  const handleFileDrop = (e:DragEvent) => {
    if (!droppable) return;

    e.preventDefault();
    e.stopPropagation();

    if (!e.dataTransfer) return;
    const { files } = e.dataTransfer;
    const changedFile = files[0];
    setFile(changedFile);
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(changedFile);
    setDragging(false);
  };

  return (
    <Container
      onClick={handleChooseFile}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleFileDrop}
      {...props}
    >
      <Input
        accept={accept}
        name={name}
        onChange={handleFileChange}
        ref={inputRef}
        type="file"
      />
      {typeof children === 'function' ? children(file, dragging) : children}
    </Container>
  );
};

export default Upload;
