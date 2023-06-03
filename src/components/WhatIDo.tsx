import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useRef, useState } from "react";
import { GrFormAdd } from "react-icons/gr";

const WhatIDo = () => {
// querry params 
// const [first, setfirst] = useState(second)



  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   add Tech Details

  //   domain name
  let optionsDomains = ["frontend", "Backend"];

  let dummyImageUrl =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBMREg4OFQ8WEA8PFRYQEA8PEBERFhEWFxURExUYHSogGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOkA2AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgYDB//EADwQAAICAQEFBQYEAwcFAAAAAAABAgMRBAUSITFRBiJBcYETMmGRocFScrHRIzOCFBUWQmJjwkNTc5Lh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABX7R2pCnh70+i8Pi34AWBE1O0aq/ems9FxfyRzut2vZYsZ3Y9It8fNleB0c+0lS5Rtf9KX6s1XaarxhavSL+5z5hoDqqdvUS/wA7X5otfUn1XRmsxlGS+DTODlV0NK7JQeYylGXWLafzA+hg5nZvaJp7t3FfiS4rzXj6HSVzUkmmmmsprimBsAAAAAAAAAAAAAAAAAAAAAAACLtHVKqtz8eSXWT5HHWTcm5N5beW+rLntPdmUIeCTk/N8F9P1KQADMVnglxMyg1zTXmBqAABrZHPmbACOXPZ3aTrmqpPuSeF/pk+XoynmuJgD6KCLszUe0qhPxcVnzXBkoAAAAAAAAAAAAAAAAAAAAAA5Lbss3y+G6voQ6Ib0kvBsl7cWL5/0v6EKuWGn0aYF1Xo4rDSSa6HtZTGSw0sG8ZZWTIFHrdG63nnHr08yKdJKKaw1wZU6rZ7jxjxj9UBBBmSxzTXnwPXT0OeUnxSz5gQ7eZoe2pqlGWJJr7nkB1nZWeaGulkl80n9y5KLsl/Kn/5P+KL0AAAAAAAAAAAAAAAAAAAAAA5jtJXi1PrFfTh+xX0UOeceGP/AKX/AGgpU9xZxJbz9H4fNFdshe91TAn1LCRuAAAAGkqk/A84aaMXlJJ+R7gCJqalLKayig1FW5Jx6fVeDOit5lPr4b1qS/CvuBf9loYoz1sm/wBF9i4K/YeFTGK/y5i/Pn9ywAAAAAAAAAAAAAAAAAAAAAAKra3vL8v3IGhrw5vrJlptWrKUunB+RFp5AbgAAAAAAAj282V11f8AGz4OC/YsrlxyRr/D1AtNhe5L8/8AxRZkPZdDhWs823J+pMAAAAAAAAAAAAAAAAAAAAAANLYbya6rBVKpwyn14fEuCLro8E+j/UCEAAAAAAADS3keen0jskuHcXN/ZG178C00MMVr48fmBIAAAAAAAAAAAAAAAAAAAAAAAANLI5TRuAKmSxwMErXQxiXXgRQAAAAGs5YQGtde/NLw8fLxLpIh7MqSjveMv06E0AAAAAAAAAAAAAAAAAAAAAAAAAAAIe1Pc9UV9dvXmT9qvueckVIEwEWM2vE29s/gBIIOpuy8Lkbyk34kVgdJs/8AlQ/KiQRdmSzVHyx9SUAAAAAAAAAAAAAAAAAAAAAAAAABpbYopuUkkuLbaSXmzmNodp057lM1hf5mvefSOfAC02ndmSiuUf1ZCI1OujLnwfx5fMkpgAAAI8lxJBG1VkY8W19wLXYmo5wf5l90W5881u0eHPdXn3n5FxsDtZCaVd8t2fJTl7sum8/B+YHVgxF5WVyMgAAAAAAAAAAAAAAAAACo23sX+0Re7dbCXgt+fs38HHIEnWbWoq9+6CfRPMvkjn9f2zS4U1Zf4rOC9Iri/ocrrtFOibhZDdl8011T8UeAEvX7TtvebLHJdOUV5JEQACRVrJR+K+P7kyraaX4o+TyirAF5Ha3+6/VGf72/3foUQAubNqr8cn5ZId2vzyj6shADzty3lts0Pc0lACbszbl+n4QszH8M+9D0Xh6HV7P7a1S4XQlXLqu/D90cI4MwB9d0mvqtWa7YS/LJN+q5kk+NQi8rGd7PDHvemDuey+zdWmp3X2xrXKuUt+Uvzb2d1fXyA6wAAAAAAAAAAAAAAAETaGz6747tkMrwfKUX1i/A5PXdjbE81WRlHpPuy+fJnbgD5hqtiairjKieOsVvr13eRXn18pttdn6tQm/ct/HFc/zLxA+cgsNpbFu0778G4/ihmUX+3qV4AAAADMYtvCTbfJJZb9AMEjRaGy6W7XXKT8cLgvN8kXmx+ylljUrswr/D/wBSXw/0o7XS6aFUVCEVGK8F+r+IHFafsbc/esrj85Mn0diK+dl038IJQ+vE6wAQNn7Hoo/l1RT/ABPMpv8AqfEngAAAAAAAAAAAAAAAAAAAAAAGGis1ewNNbxlRFN+MM1v13eZaADmbexlL92y2PrGX2PL/AATD/v2f+sTqwBzlHY7Tx96VsvOW6voXGi2bTT/LqhH4pd5+cnxZLAAAAAAAAAAAAAAAAAAAAAAAAMOQGQR9LrI2OajnuWSqlnh3kk3j4d5GNTr66s79kY4rstec/wAuGN+XplASQaRsT4prln06ml+phXCU5SShGMpyfgopZbA9gaqafJrln0PGGsg7JVJ9+MIWPpuycksPr3WBIBq5eXzG+uq+YGwMJkazaFUbY0uyKulGU4wz3nCPOWPBfFgSgVK7SaVx3la2sqOFVc5yzFyUowUd6UXFOW8k1hN5wjd7f0284+3hwi5t4luYUFNpTxutqLUt1POHnAFmCq/xFpsRftWsuUcOu1Sg4tJu2LjmpJyjxnhd5dSXLX1p2Zml7JJ2N5UYJrPGXLOOOOfLqgJQIP8Aete/Cv8Aiuc4xmkqL5JRecOySjivOH7zXIkabVQs3nCWVGUoNpPG8uaT5PHLh4prwA9gAAAAAAAAAAAAAqu0ez5aincjCqUt6Mo+1k4wTXKTxGW9jnutYfw5lqagcprOys5uyalQrZzvk5YlFzjKqtQhLC5b9aeOOPDJ56nsrZd7SVkNHv216+Dfem6vbqG44NwzLdcX+H3srodgEByFnZayU5S3KIuVLity61RobpdfsoQUEpQy28vHP3W+J663stv+1hXXpYVz0c9NxTk3JwxHubncipZllPj0zxOpMoDj9V2Wts30np6t7MlZW5uytewVf9lit1Zqz3s5XP3U+JJp7P2K6F6hpa9z2S9jXKboaTs3n7i7y31KL3eDWPHJ04QHN7T2FbdO2WNOnbQq9+Upys08lCScK+6t6Em+LzF8+eViG+yUpycpR0sU427tcN6VdLnZQ8VvdXBqqeXhcZ8jr3+4QFXs7ZCrqdUniK1Nl8FVKdajB3uyEOGOCyk48ua5DaOnulfTZXVp3CG/vOd065vei47qSrkmlnPFrmy1MPx8gOX/ALivthJ3KmGoc4tW0ai2TjBxcJRjH2cd1KDwo5abeW+uY7AuqajT/ZvZV23amlWSsTdk6J1KqzEXiC35PeTbeEsLmdQjAHMR7OTtjD2yhCe/N3Sq1FljvrbjJxlmuC70opYxwisJ8eEefZa5+0W/W4ObslF3XpauT1Ctzdw/hNJbvd3s56LB2BgDmKtgXp1fxIRnFd66N10rd3fslHTqDWJwSs3VOTzwzjPKb2X2RZpVKM3BQ3aoxhCy22KcE967M0mpTysxXBbvN5bLsIDIAAAAAAAP/9k=";
  const [imageUrl, setImageUrl] = useState<string>(dummyImageUrl);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageUrl(e.target?.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        paddingY: "10px",
        paddingX: "10px",
        height: "fit-content",
        marginY: "10px",
      }}
    >
      <Stack direction={"column"}>
        <Typography variant="h6">What I Do </Typography>
        <Box
          onClick={handleOpen}
          sx={{
            border: "1px solid #eaedf2",
            paddingY: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1,
            cursor: "pointer",
          }}
        >
          <Button>Add Work</Button>
        </Box>
      </Stack>

      <Modal
        sx={{
          "& .MuiBox-root": {
            border: "none",
            outline: "none",
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Grid container spacing={3}>
            <Grid item>
              <Typography variant="h6">Add Work Details</Typography>
            </Grid>
            <Grid container paddingX={3} spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="Name"
                  name="name"
                  label="Job Title"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid container xs={12} paddingX={3} rowGap={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="Name"
                    name="name"
                    label="Job description"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <GrFormAdd />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Chip
                    label="Clickable Deletable"
                    onClick={() => {}}
                    onDelete={() => {}}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Divider />
          <br />
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                border: "1px solid #eaedf2",
                paddingY: "0.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
                cursor: "pointer",
              }}
            >
              <Button> Add Tech Details</Button>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Autocomplete
                id="combo-box-demo"
                disableCloseOnSelect
                options={optionsDomains}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Domain Name"
                    variant="standard"
                  />
                )}
              />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {imageUrl === dummyImageUrl ? (
                <Avatar
                  src={imageUrl}
                  onClick={() => inputFileRef.current?.click()} // Trigger file input click
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <Avatar src={imageUrl} />
              )}
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={inputFileRef}
                onChange={handleFileChange}
              />
            </Grid>
            <Grid item xs={10} width={"100%"}>
              <TextField
                required
                id="Name"
                name="name"
                label="Tech Name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <GrFormAdd />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Button
            fullWidth
            sx={{
              padding: 2,
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default WhatIDo;
// {
//     "id": 1,
//     "img": "heatmap.png",
//     "title": "Full Stack MERN Development",
//     "fileName": "FullStackImg",
//     "skills": [
//       "⚡Fluent in TypeScript as the primary programming language.",
//       "⚡Proficient in building responsive front-end websites using React-Redux.",
//       "⚡Skilled in designing complex website styles using Bootstrap 5 and styling libraries.",
//       "⚡Experienced in developing specific website functionalities using vanilla JavaScript and ES6, with the ability to use jQuery when necessary.",
//       "⚡Capable of creating mobile applications using React Native.",
//       "⚡Knowledgeable in developing the backend of applications using Node.js, Express, and MongoDB."
//     ],
//     "softwareSkills": [
//       {
//         "id": 1,
//         "skillName": "HTML5",
//         "fontAwesomeClassname": "html.png",
//         "imgurl": "data:image/png;base64,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",
//         "style": {
//           "color": "#E34F26"
//         }
//       }
//     ]
//   },