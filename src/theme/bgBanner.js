import bgBody from "assets/img/background-body-admin.png";

export const bgBanner = {
  styles: {
    global: (props) => ({
      body: {
        bgImage: {
          base: bgBody,
        },
        bgSize: "cover",
        bgPosition: "center center",
      },
    }),
  },
};
