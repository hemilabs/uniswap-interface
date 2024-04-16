import styled from 'styled-components'

type ContainerProps = {
  clickable?: boolean
}
type SVGProps = React.SVGProps<SVGSVGElement> & ContainerProps
const HemiMainColor = '#FF5F00'

export const HemiLogo = ({ clickable, ...props }: SVGProps) => (
  <Container clickable={clickable}>
    <svg {...props} viewBox="0 0 1043.5 324.5" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M196.9.05c-1.7-.3-3.3.8-3.6 2.5l-20.5 116.3h-15.3L137 2.55c-.3-1.7-1.9-2.8-3.6-2.5C60.6 14.15 4.8 76.15.2 151.95c0 .1-.2 3.3-.2 4.9v5.3c0 80.4 57.4 147.3 133.5 162.1 1.7.3 3.3-.8 3.6-2.5l20.5-116.3h15.3l20.4 116.5c.3 1.7 1.9 2.8 3.6 2.5 72.8-14.2 128.5-76.2 133.2-152 0-.1.2-3.3.2-4.9v-5.3c.1-80.5-57.3-147.4-133.4-162.2Z"
        fill={HemiMainColor}
        strokeWidth={0}
      />
      <path
        d="M546.3 115.35c-8.2-4.6-17.7-6.9-28.7-6.9-12.1 0-22 2.6-29.8 7.8-7.8 5.2-13.5 12.2-17.2 21.2h-1.9v-79.6h-36.4v210.8h37.3v-92.7c0-7.6 1.5-14.1 4.4-19.5s7-9.5 12.1-12.3c5.2-2.8 11.1-4.3 17.7-4.3 9.8 0 17.5 3 22.9 8.9 5.5 5.9 8.2 14.2 8.2 24.9v94.9h37.3v-100.6c0-12.8-2.2-23.6-6.7-32.4-4.7-8.9-11-15.6-19.2-20.2ZM716.1 127.55c-6.7-6.5-14.4-11.3-23.1-14.5-8.7-3.1-17.9-4.7-27.6-4.7-15.1 0-28.2 3.4-39.4 10.3s-19.9 16.5-26.1 28.8c-6.2 12.3-9.3 26.6-9.3 42.9s3.1 30.9 9.3 43.1c6.2 12.2 15 21.6 26.5 28.2 11.5 6.6 25.2 9.9 41 9.9 12.3 0 23.2-1.9 32.7-5.6 9.5-3.7 17.4-9 23.5-15.9 6.1-6.8 10.3-14.8 12.5-24l-34.8-3.8c-1.6 4.5-4.1 8.2-7.3 11.2s-7 5.3-11.4 6.8-9.3 2.3-14.7 2.3c-8.1 0-15.2-1.7-21.2-5.2s-10.7-8.5-14.1-15c-3.2-6.3-4.9-13.9-5-22.7h110.1v-11.4c0-13.9-1.9-25.8-5.8-35.9-3.9-10-9.1-18.3-15.8-24.8Zm-88.5 47.1c.4-6.2 2-11.9 4.8-17.2 3.2-5.9 7.7-10.7 13.4-14.4 5.8-3.7 12.5-5.5 20.1-5.5 7.1 0 13.4 1.6 18.8 4.8s9.6 7.6 12.6 13.2 4.6 12 4.6 19.1h-74.3ZM931.5 108.45c-11.5 0-21.4 2.6-29.7 7.9s-14.3 12.3-17.8 21.1h-1.6c-3-8.9-8.2-16-15.6-21.2s-16.4-7.8-27.1-7.8-19.7 2.6-27.3 7.7c-7.6 5.1-13.1 12.2-16.4 21.3h-1.9v-26.9h-35.6v158.1h37.3v-96.2c0-6.5 1.3-12.2 3.9-17.1 2.6-4.9 6.1-8.7 10.5-11.4s9.3-4.1 14.6-4.1c7.9 0 14.3 2.4 19.2 7.3 4.9 4.9 7.4 11.4 7.4 19.6v101.9h36.5v-98.6c0-8.9 2.5-16.2 7.6-21.8 5-5.6 12.1-8.4 21.1-8.4 7.5 0 13.9 2.3 19.1 6.8 5.2 4.6 7.8 11.8 7.8 21.6v100.4h37.4v-106.2c0-17.6-4.6-31.1-13.8-40.3-9.2-9.1-21-13.7-35.6-13.7ZM1006.2 110.45h37.3v158.1h-37.3zM1006.2 57.85h37.3v30.2h-37.3z"
        strokeWidth={0}
      />
    </svg>
  </Container>
)

const Container = styled.div<ContainerProps>`
  position: relative;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
`
