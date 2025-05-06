FROM node:22

RUN apt update && apt install -y less man-db sudo postgresql-client

ARG USERNAME=node
RUN echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

ENV DEVCONTAINER=true

RUN npm install -g prisma

RUN mkdir -p /workspace && chown -R node:node /workspace

USER node
WORKDIR /workspace