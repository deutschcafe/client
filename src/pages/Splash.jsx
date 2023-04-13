import React from "react";

import Container from "@mui/material/Container";

import Header from "../components/Header";
import Navbar from "../components/Navbar";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import newMember from "../assets/new_team_member.png";
import dialog from "../assets/dialog.png";
import listen from "../assets/listen.png";
import playlist from "../assets/playlist.png";
import record from "../assets/record.png";
import listen_back from "../assets/listen_back.png";
import dialog1 from "../assets/dialog1.png";
import dialog2 from "../assets/dialog2.png";
import dialog3 from "../assets/dialog3.png";

import DialogCard from "../components/DialogCard";
import Footer from "../components/Footer";

const Splash = () => {
  return (
    <Container maxWidth="1920px">
      <Navbar />
      <Header />

      {/*What is shadowing */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "144px 300px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: "52px",
            fontFamily: "Lexend",
            fontWeight: "bold",
          }}
        >
          What is shadowing?
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "36px",
          }}
        >
          Shadowing is an advanced language learning technique, which can be
          used by learners independently to improve their intonation and
          pronunciation. It’s quite a simple concept - you listen to a model
          (i.e. a video or audio of someone speaking) and you repeat what they
          say in real time.
        </Typography>
      </Box>

      {/* So How? */}
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              width: "662px",
              height: "296px",
              fontWeight: "700",
              fontSize: "66px",
              lineHeight: "74px",
              color: "#061C3D",
            }}
          >
            At deutsch cafe, we’ve taken the shadowing to the next level
          </Typography>
          <Box
            component="img"
            src={newMember}
            alt="new member"
            sx={{ width: "671px", height: "443px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <Typography
            sx={{
              width: "358px",
              height: "69px",
              fontSize: "88px",
              lineHeight: "68px",
              color: "#061C3D",
            }}
          >
            So how?
          </Typography>
        </Box>
      </Box>

      {/* FEATURE-1 */}
      <Box
        sx={{
          height: "696px",
          padding: "124px 300px 124px, 300px",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Box
          component="img"
          src={dialog}
          alt="dialog"
          sx={{ width: "609px", height: "428px" }}
        />
        <Box>
          <Typography
            sx={{
              width: "662px",
              height: "296px",
              fontSize: "36px",
              lineHeight: "74px",
              color: "#061C3D",
            }}
          >
            Choose a dialogue appropriate to your level: Our advice is to choose
            regardless of level, because repetition will positively change the
            way you speak.
          </Typography>
        </Box>
      </Box>

      {/* FEATURE-2 */}
      <Box
        sx={{
          height: "772px",
          padding: "124px 300px 124px, 300px",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Box>
          <Typography
            sx={{
              width: "662px",
              height: "296px",
              fontSize: "36px",
              lineHeight: "74px",
              color: "#061C3D",
            }}
          >
            Listen: Before you start shadowing, listen to the audio at least
            once to get used to the speaker’s accent, rhythm and intonation.
            Don’t worry if you don’t understand every word, but if it’s too fast
            or complex, look for an alternative. Or repeat until you catch it,
            never give up.
          </Typography>
        </Box>
        <Box
          component="img"
          src={listen}
          alt="listen"
          sx={{ width: "609px", height: "428px" }}
        />
      </Box>

      {/* FEATURE-3 */}
      <Box
        sx={{
          height: "1035px",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Box
          component="img"
          src={playlist}
          alt="playlist"
          sx={{ width: "660px", height: "432px" }}
        />
        <Box>
          <Typography
            sx={{
              width: "662px",
              height: "296px",
              fontSize: "36px",
              lineHeight: "74px",
              color: "#061C3D",
            }}
          >
            Practise shadowing: Select a speaker and start the dialog.Speakers
            will appear in different colors in the dialog. You will see 4
            options in the menu, 2 mouths and 2 ears.If you click on the mouth
            of the color you want to talk about, you will speak that color.
            While the dialog is in progress, the color you click is muted and
            it's your turn to speak. If you click on an ear icon, the text will
            disappear and you will continue to talk by just hearing the person
            you are talking to.
          </Typography>
        </Box>
      </Box>

      {/* FEATURE-4 */}
      <Box
        sx={{
          height: "772px",
          padding: "124px 300px 124px, 300px",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Box>
          <Typography
            sx={{
              width: "662px",
              height: "296px",
              fontSize: "36px",
              lineHeight: "74px",
              color: "#061C3D",
            }}
          >
            Record yourself: Our advice is to choose regardless of level,
            because repetition will positively change the way you speak.
          </Typography>
        </Box>
        <Box
          component="img"
          src={record}
          alt="record"
          sx={{ width: "505px", height: "716px" }}
        />
      </Box>

      {/* FEATURE-5 */}
      <Box
        sx={{
          height: "1035px",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Box
          component="img"
          src={listen_back}
          alt="listen_back"
          sx={{ width: "660px", height: "432px" }}
        />
        <Box>
          <Typography
            sx={{
              width: "662px",
              height: "296px",
              fontSize: "36px",
              lineHeight: "74px",
              color: "#061C3D",
            }}
          >
            Listen back: Listen to your recording and compare your speech to the
            original audio.
          </Typography>
        </Box>
      </Box>

      {/* DIALOG */}
      <Box
        sx={{
          height: "743px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: "1rem" }}>
          Dialog
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection:'row',
          }}
        >
          <DialogCard
            img={dialog1}
            title={"Beginner"}
            bgColor={"rgba(202, 43, 28, 0.07)"}
          />
          <DialogCard
            img={dialog2}
            title={"Intermediat"}
            bgColor={"rgba(247, 208, 70, 0.13)"}
          />
          <DialogCard
            img={dialog3}
            title={"Advance"}
            bgColor={"rgba(0, 0, 0, 0.03)"}
          />
        </Box>
      </Box>

      {/* FOOTER */}
      <Footer/>
    </Container>
  );
};

export default Splash;
