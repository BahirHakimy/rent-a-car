class AuthenticationController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @user = User.where(username: params[:username]).first
    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id,username: @user.username)
      time = Time.now + 24.hours.to_i
      render json: { token:, exp: time.strftime('%m-%d-%Y %H:%M'),
                     username: @user.username }, status: :ok
    else
      render json: { error: 'Invalid credentials' }, status: :unauthorized
    end
  end

  private

  def login_params
    params.permit(:username, :password)
  end
end
