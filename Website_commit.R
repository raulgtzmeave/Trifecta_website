#### Commit to website ----

quarto::quarto_render()
system("git add . && git commit -m 'Updated site' && git push origin main")
