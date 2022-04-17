import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Link = styled.a`
  &:not(:last-child) {
    margin-right: 16px;
  }

  svg {
    fill: var(--white);
  }
`
