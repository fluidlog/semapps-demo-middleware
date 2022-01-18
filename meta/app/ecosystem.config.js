module.exports = {
  apps : [{
    name: "meta",
    script: "./node_modules/.bin/moleculer-runner",
    args: "--repl /app/services",
    error_file: "./logs/err.log",
    out_file: "./logs/out.log"
  }]
}
